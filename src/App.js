import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Headroom from 'react-headroom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import KeyFeatures from './Components/KeyFeatures/KeyFeatures';
import DigitizeYourBusiness from './Components/DigitizeYourBusiness/DigitizeYourBusiness';

function App() {
  return (
    <div>
      <Headroom>
        <Header></Header>
      </Headroom>
      <Home></Home>
      <KeyFeatures></KeyFeatures>
      <DigitizeYourBusiness></DigitizeYourBusiness>
    </div>
  );
}

export default App;
