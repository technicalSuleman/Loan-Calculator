import React from "react";
import "./UserInput.css";

function UserInput(props) {
    function handleLoan(event) {
        event.preventDefault(); // Prevents the form from refreshing the page
        let loanAmount = document.getElementById('LoanAmount').value;
        let interestRate = document.getElementById('Irate').value;
        let loanTerm = document.getElementById('Loanterm').value;
        
        const Data = {
            loanAmount: loanAmount,
            interestRate: interestRate,
            loanTerm: loanTerm
        };
        
        props.LoadData(Data);
    }

    return (
        <div className="container user__input">
            <div className="row">
                <form action="" onSubmit={handleLoan}>
                    <div className="mb-3">
                        <input
                            type="text"
                            name=""
                            className="form-control"
                            id="LoanAmount"
                            placeholder="Loan Payment"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name=""
                            className="form-control"
                            id="Irate"
                            placeholder="Interest rate"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            name=""
                            className="form-control"
                            id="Loanterm"
                            placeholder="Loan Term in years"
                        />
                    </div>
                    <button type="submit"
                        className="btn btn-primary"
                    >
                        Calculate
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UserInput;
