import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DigitizeYourBusinessImg from '../../img/digitalizYourBusiness.svg';

export default function DigitizeYourBusiness() {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center flex-row' style={{ height: "80vh" }}>
            <div className='w-50 d-flex justify-content-center align-items-center flex-row'>
                <div className='ps-4 w-75 d-flex justify-content-center align-items-center flex-column'>
                    <h1>Sign up and digitize your business today</h1>
                    <p>It is a simple and user-friendly application that customers are able to browse, order and pay from their phones.</p>
                    <li>QR code provides a contactless dining experience. Give diners the freedom to order and reorder when they want, without waiting for a waiter.</li>
                    <li>Removal of products automatically from your e-catalog when the product is out of stock in the inventory system.</li>
                </div>
            </div>
            <div className='w-50 d-flex justify-content-center align-items-center flex-row'>
                <img className='w-75' src={DigitizeYourBusinessImg} alt="img" />
            </div>
        </div>
    )
}