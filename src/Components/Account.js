import React from 'react';
import Web3 from 'web3';
import { MetaMaskButton } from 'rimble-ui';


//Set web3 provider
var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: null, balance: null, network: null };

    // This binding is necessary to make `this` work in the callback
    this.clickFunction = this.clickFunction.bind(this);
  } 


  async getWalletInfo() { 

    
    //get Metamask address
    let address = ((await web3.currentProvider.selectedAddress).slice(0, 8)+"..")
    
    //get Metamask balance
    let balance = (web3.utils.fromWei(await web3.eth.getBalance(web3.currentProvider.selectedAddress).catch())).slice(0, 7);
    
    //get Metamask network
    var network = null

    switch (window.ethereum.networkVersion) {
      case "1": 
        network = "Ethereum Mainnet";
        break;
      case "2":
        network = "Morden Test";
        break;
      case "3":
        network = "Ropsten Test";
        break;  
      case "4":
        network = "Rinkeby Test";
        break;
      case "5":
        network = "Goerli Test";
        break;
      default:
        network = "Unknown";
    }
    
    //set Component state
    this.setState(state => ({
      address : address,
      balance : balance,
      network : network
    }))
  }

  componentDidMount() {
    this.getWalletInfo()
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
          <MetaMaskButton.Outline>Connect with MetaMask</MetaMaskButton.Outline>
        </div>
      </div>
    );
  }
};

export default Account;