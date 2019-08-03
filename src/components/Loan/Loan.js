import React, { useState } from 'react';

const Loan = ({title, onClickButton, isInvested }) => {
    return (
        <div className="loan" >
            <div>
                <h2>{title}</h2>
                <div>details</div>
            </div>
            <div>
                {
                    isInvested ?
                        <p>Invested</p>
                    :
                        null
                }
                <button className="loan-btn" onClick={onClickButton}>Invest</button>
            </div>
        </div>
    )
};

export default Loan;