import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Headroom from 'react-headroom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import KeyFeatures from './Components/KeyFeatures/KeyFeatures';
import DigitizeYourBusiness from './Components/DigitizeYourBusiness/DigitizeYourBusiness';
import Payments from './Components/Payments/Payments';
import CustomersFeedBack from './Components/CustomersFeedBack/CustomersFeedBack';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Headroom>
        <Header></Header>
      </Headroom>
      <Home></Home>
      <KeyFeatures></KeyFeatures>
      <DigitizeYourBusiness></DigitizeYourBusiness>
      <Payments></Payments>
      <CustomersFeedBack></CustomersFeedBack>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
