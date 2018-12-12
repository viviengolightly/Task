import React from 'react';


const Loan = ({id, name, repaymentAmount, fundingAmount, del}) =>{
  const handleClick = (event) =>{
    event.preventDefault();
    del(id);
  };
  return(
    <li className="loan">
      <div className="name">{name}</div>
      <div className="repayment">{repaymentAmount}</div>
      <div className="funding">{fundingAmount}</div>
      <div><button onClick={handleClick}>Delete</button></div>
    </li>
  );
};

export default Loan;
