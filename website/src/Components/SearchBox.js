import React from 'react';


class SearchBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      value: '',
      name: '',
      repaymentAmount: '',
      fundingAmount: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  };

  handleChange = (event) => {
     this.setState({value: event.target.value});
  }

  handelSubmit = (event) =>{
    event.preventDefault();
    this.props.findLoan(this.state.value);
    console.log("Val:" + this.state.value)
  }

  render(){
    return(
      <div className="searchBox1">

        <h2 className="header2">SEARCH FOR A LOAN BY ID</h2>

        <form className="form" onSubmit={this.handelSubmit}>
          <input className="inputField"  value={this.state.value} onChange={this.handleChange} placeholder="ID"/>
          <input className="submitButton" type="submit" value="SEARCH"/>
        </form>
      </div>
    );
  }
};

export default SearchBox;
