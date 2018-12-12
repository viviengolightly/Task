import React, { Component } from 'react';
import request from 'request-promise-native';
import './Styles/App.css';
import Loan from './Components/Loan.js';
import SearchBox from './Components/SearchBox.js';
import AddLoan from './Components/AddLoan.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      loanList: [],
      loanByID: '',
    };
    this.getLoans = this.getLoans.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.findById = this.findById.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.getLoans();
  };

  componentDidUpdate(){
    this.getLoans();
  };

  getLoans = () =>{
    //GET
    const options ={
      uri: 'http://localhost:5001/loans',
      json:true,
    };
    request(options)
      .then((loans) => {this.setState({loanList: loans})})
      .catch((err) => {console.log(`Error getting loans ${err}`)});
  };

  handleDelete = (id) =>{
      //DELETE
      const options ={
        uri: `http://localhost:5001/loans/${id}`,
        json:true,
        method: 'DELETE'
      };

      request(options)
        .then((r) => {})
        .catch((err) => {
          console.log(err);
        });
  };

  findById = (id) => {
    //GET BY ID
    const options={
      uri: `http://localhost:5001/loans/${id}`,
      json: true,
      method: 'GET'
    };

    request(options)
      .then((loan) => {this.setState({loanByID: loan})})
      .catch((err) => {console.log(err)});
  };

  handleAdd = (name, repay, fund) =>{
    //POST
    const options={
      uri: `http:localhost:5001/loans`,
      body:{
        name: name,
        repayment: repay,
        funding: fund
      },
      method: 'POST',
    };

    request(options)
      .then((r) => {
      return r.json();
    })
      .catch((err) =>{
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>LOANS WEB APP</h1>
        </div>
        <div className="allLoans">
            {this.state.loanList.map((loan) => {
              return(
                <ul key={loan.id}>
                  <Loan
                    id={loan.id}
                    name={loan.name}
                    repaymentAmount={loan.repayment}
                    fundingAmount={loan.funding}
                    del={this.handleDelete}
                  />
                </ul>
              );
            })}
        </div>

        <div className="searchBox">
          <SearchBox findLoan={this.findById}/>
          <p>{this.state.loanByID}</p>
        </div>

        <AddLoan add={this.handleAdd} />
      </div>
    );
  }
}

export default App;