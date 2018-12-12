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
  };

  handleChange = (event) => {
     this.setState({value: event.target.value});
  }

  handelSubmit = () =>{
    this.props.findLoan(this.state.value);
  }

  render(){
    return(
      <div className="searchBox">
        <form className="form" onSubmit={this.handelSubmit}>
          <input className="inputField"  value={this.state.value} onChange={this.handleChange} placeholder="ID"/>
          <input className="submitButton" type="submit" value="SEARCH"/>
        </form>
      </div>
    );
  }
};

export default SearchBox;
