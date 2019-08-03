import React, { useState } from 'react';
import { toNumber } from '../../helpers'


                                
const InvestModal = ({closeModal, options, onInvest}) => {
    const [error, setError] = useState('')
    const [investAmount, setInvestAmount] = useState(0)

    const validateInvest = () => {
        const available = toNumber(options.amount)
        if (investAmount > available){
            setError('please chose amount less then allowed')
            return false
        } else {
            return true
        }
    }

    const handleClick = () => {
        if (validateInvest()) {
            onInvest(investAmount)
            closeModal()
        }
    }
    
    const getEndDate = () => {
        const date    = new Date(options.term_remaining * 1000),
              hours   = date.getHours(),
              minutes = date.getMinutes(); 
        return `${hours} h ${minutes} m `
    };
    const handleClose = (e) => e.target.className === 'shadow' ? closeModal() : null;


    return (
        <div className="shadow" onClick={handleClose}>
            <div className="invest-modal">
                <div className="modal-header">
                    <h3>Invest in Loan</h3>
                    <p>{options.title}</p>
                </div>
                <div className="modal-loan-description">
                    <p>Amount available: {options.amount}</p>
                    <p>Loan ends in: {getEndDate()}</p>
                </div>
                <div className="modal-actions">
                    <p>Invested amount ($)</p>
                    <input type="number" placeholder="write amount.." onChange={(e) => setInvestAmount(e.target.value)}/>
                    <button className="loan-btn" onClick={handleClick}>Invest</button>
                </div>
                <div className="modal-error">{error}</div>
            </div>
        </div>
    );
}

export default InvestModal;