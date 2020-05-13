import React from 'react';
import './App.css';
import Account from './Components/Account';
import RSI from './Components/RSI';
import BuyUsdc from './Components/BuyUsdc';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className="row container-fluid">
      <Account />
      <RSI />
      <BuyUsdc />
    </div>
  );
} 

export default App; 
