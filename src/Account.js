import React, { Component } from 'react';

export default class Account extends Component {
  constructor(){
    super();
    this.state={
      balance: 0
    }
    this._deposit = this._deposit.bind(this);
    this._withdraw = this._withdraw.bind(this);
  }
  _deposit(){
    // get user input and add it to the balance
    let depositAmount = this.refs.newAmount.value
    // reset the balance state
    this.setState({
      balance: this.state.balance + +depositAmount
    })
  }
  _withdraw(){
    // get user input and deduct it from the balance
    let withdrawAmount = this.refs.newAmount.value
    if (this.state.balance > withdrawAmount){
      this.setState({
        balance: this.state.balance + -withdrawAmount
      })}else{
        alert("Insufficient Funds")
      }
    // reset the balance state
  }
  _handleClick(){
    this.props.withdraw();
  }
  render(){
    return(
      <i onClick={this._handleClick.bind(this)} className="zero"></i>
    )
  }


  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance" >${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="newAmount"/>
        <input type="button" value="Deposit" onClick={this._deposit}/>
        <input type="button" value="Withdraw" onClick={this._withdraw}/>
      </div>
    )
  }
}
