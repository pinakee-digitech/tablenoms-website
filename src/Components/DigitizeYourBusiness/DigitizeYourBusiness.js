import React from 'react';
import './DigitizeYourBusiness.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DigitizeYourBusinessImg from '../../img/digitalizYourBusiness.svg';

export default function DigitizeYourBusiness() {
    return (
        <div className='sub-keyFeatures my-5 my-md-0 w-100 d-flex justify-content-center align-items-center flex-wrap-reverse flex-column flex-md-row'>
            <div className='card-width px-2 px-md-0 d-flex justify-content-center align-items-center flex-row'>
                <div className='ps-0 ps-md-4 w-75 d-flex justify-content-center align-items-center flex-column'>
                    <h1>Sign up and digitize your business today</h1>
                    <p>It is a simple and user-friendly application that customers are able to browse, order and pay from their phones.</p>
                    <li>QR code provides a contactless dining experience. Give diners the freedom to order and reorder when they want, without waiting for a waiter.</li>
                    <li>Removal of products automatically from your e-catalog when the product is out of stock in the inventory system.</li>
                </div>
            </div>
            <div className='card-width d-flex justify-content-center align-items-center flex-row'>
                <img className='w-75' src={DigitizeYourBusinessImg} alt="img" />
            </div>
        </div>
    )
}