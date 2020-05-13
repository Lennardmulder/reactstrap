import React from 'react';

class BuyUsdc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.clickFunction = this.clickFunction.bind(this);
  }

  clickFunction() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log("clickFunction triggered")
  }

  render() {
    return (
      <div className="p-3 card col-md-4" style={{}}>
        <div className="card-body">
          <h1>
            Buy USDC
          </h1>
          <button className="btn btn-primary" onClick={this.clickFunction}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        </div>

      </div>
    );
  }
};

export default BuyUsdc;