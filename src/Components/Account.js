import React from 'react';
import Web3 from 'web3';

//Set web3 provider
var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");

//Fetch user's metamask address and slice it
var shortAddress = ((web3.currentProvider.selectedAddress).slice(0, 8)+"..");

//Fetch user's metamask balance
web3.eth.getBalance(web3.currentProvider.selectedAddress).then(result => {
  var mmBalance = result
})



class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: null, balance: null, network: null };

    // This binding is necessary to make `this` work in the callback
    this.clickFunction = this.clickFunction.bind(this);
  }

  componentDidMount() {

    this.setState(state => ({
      address : shortAddress,
      //balance : mmBalance,
      network : null
    }))

  }

  clickFunction() {
    this.setState(state => ({
      isConnected: !state.isConnected

    }));
  }

  render() {
    return (
      <div className="p-3 card col-md-4">
        <div className="card-body">
          <h1 className="card-title">
            Wallet info
          </h1>
          <ul>
            <li>Your address: {this.state.address}</li>
            <li>Your balance: Ξ{this.state.balance}</li>
            <li>Your network: {this.state.network}</li>
          </ul>
          <button className="btn btn-primary" onClick={this.clickFunction}>
            {this.state.isConnected ? 'Disconnect Metamask' : 'Connect Metamask'}
          </button>
        </div>
      </div>
    );
  }
};

export default Account;