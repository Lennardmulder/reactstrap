import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class RSI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      RSI: 0,
      isToggleOn: true 
    };

    // This binding is necessary to make `this` work in the callback
    this.clickFunction = this.clickFunction.bind(this);
  }

  clickFunction() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log("clickFunction called")
  }
  
  componentDidMount() {



  }

  render() {
    return (
      <div className="p-3 card col-md-4">
        <div className="card-body">
          <h1 className="card-title">RSI = <span style={{ color: "red" }}>{this.state.RSI}</span></h1>
          <h4>What is the RSI?</h4>
          <p>RSI stands for Relative Strength Index, learn more about this particular RSI <a href="https://help.tokensets.com/en/articles/3559151-eth-cusdc-rsi-60-40-crossover-set-details">here</a></p>
        </div>
      </div>
    );
  }
};

export default RSI;