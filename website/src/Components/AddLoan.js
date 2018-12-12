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
      <div className="addLoan1">
        <h2 className="header2"> ADD LOAN</h2>

        <form className="form" onSubmit={this.handleAdd}>
        <label className="lbl">Name:
        <input className="input" type="text" placeholder="NAME" value={this.state.name} name="name" onChange={this.handelChange} /></label>
        <label className="lbl">Repayment Amount:
        <input className="input" type="text" placeholder="REPAYMENT" value={this.state.repayment} name="repayment" onChange={this.handelChange} />
        </label>
        <label className="input">Funding:
        <input className="input" type="text" placeholder="FUNDING" value={this.state.funding} name="funding" onChange={this.handelChange} />
        </label>
        <input className="submitBtn" type="submit" value="ADD LOAN"/>
        </form>
      </div>
    );
  }
}

export default AddLoan;
