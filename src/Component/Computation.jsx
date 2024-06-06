import React from 'react';
import './Computation.css';

function Computation({ data, monthlyPayment }) {
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-6 col-md-6 col-sm-12 mt-3">
            <div className="card__info">
              <p className='text'>Loan Amount: {item.loanAmount}</p>
              <p className='text'>Interest Rate: {item.interestRate}</p>
              <p className='text'>Loan Term: {item.loanTerm} years</p>
            </div>
          </div>
        ))}
        <div className="col-6 col-md-6 col-sm-12 mt-3 mb-3">
          <div className="card__info">
            <p className='text'>Total Monthly Payment: {monthlyPayment ? `${monthlyPayment}` : "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Computation;
