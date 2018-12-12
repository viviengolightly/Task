import React from 'react';

class AddLoan extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      repayment:'',
      funding:''
    };
  };

  handleAdd = (event) =>{
    event.preventDefault();

    this.props.add(this.state.name, this.state.repayment, this.state.funding);
  }

  handelChange = (event) => {
       this.setState({
            [event.target.name] : event.target.value
       });
  }


  render(){
    return(
      <div className="addLoan">
        <h1 className="header"> ADD MOVIE</h1>

        <form className="form" onSubmit={this.handleAdd}>
        <label className="lbl">Name:</label>
        <input className="input" type="text" placeholder="NAME" value={this.state.name} name="name" onChange={this.handelChange} />
        <label className="lbl">Repayment Amount:</label>
        <input className="input" type="text" placeholder="REPAYMENT" value={this.state.repayment} name="repayment" onChange={this.handelChange} />
        <label className="input">Funding:</label>
        <input className="input" type="text" placeholder="FUNDING" value={this.state.funding} name="funding" onChange={this.handelChange} />
        <input className="submitBtn" type="submit" value="ADD LOAN"/>
        </form>
      </div>
    );
  }
}

export default AddLoan;
