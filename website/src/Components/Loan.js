import React from 'react';


const Loan = ({id, name, repaymentAmount, fundingAmount, del}) =>{
  const handleClick = (event) =>{
    event.preventDefault();
    del(id);
  };
  return(
    <li className="loan">
      <div className="name">Name: {name}</div>
      <div className="repayment">Repayment amount: £{repaymentAmount}</div>
      <div className="funding">Funding amount: £{fundingAmount}</div>
      <div><button onClick={handleClick}>Delete</button></div>
    </li>
  );
};

export default Loan;
