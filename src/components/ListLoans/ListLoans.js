import React, { useEffect, useState, Fragment } from 'react';
import Loading from '../Loading';
import Loan from '../Loan';
import InvestModal from '../InvestModal';
import { toString, toNumber } from '../../helpers';

const currentLoans = require('./current-loans.json');

const ListLoans = ({onInvest}) => {
    const [isLoading, setLoading]         = useState(false);
    const [loans, setLoans]               = useState([]);
    const [modalOptions, setModalOptions] = useState({isShow: false, options: []});

    const getCurrentLoanById = () => loans.findIndex(l => l.id === modalOptions.options.id);

    const handleModalClose = () => setModalOptions({isShow: false});

    const handleModalOpen = (loan) => () => setModalOptions({isShow: true, options: loan});

    const handleInvest = value => {
        onInvest(value);
        const newLoans      = loans;
        const currentLoan   = newLoans[getCurrentLoanById()];
        const currentAmount = toNumber(currentLoan.amount);
        
        newLoans[getCurrentLoanById()] = {
            ...currentLoan,
            amount: toString(currentAmount - toNumber(value)),
            isInvested: true,
        }
        setLoans(newLoans);
    };
    
    useEffect(() => {
        setLoading(true);
        setTimeout( 
            () => {
                setLoans(currentLoans.loans);
                setLoading(false);
            }
            ,2000
        );
    }, [loans]);

    return (
        <Fragment>
            <div>
                {
                    isLoading ? 
                        <Loading />
                    :
                        loans.map( loan => 
                            <Loan 
                                title={loan.title}
                                key={loan.id}
                                isInvested={loan.isInvested}
                                onClickButton={handleModalOpen(loan)}
                            />
                        )
                }
            </div>
            {   
                modalOptions.isShow ?
                    <InvestModal 
                        closeModal={handleModalClose}
                        options={modalOptions.options}
                        onInvest={handleInvest}
                    />
                : 
                    null
            }
        </Fragment>

    );
}

export default ListLoans;