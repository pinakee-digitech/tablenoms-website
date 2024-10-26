import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomersFeedBack.css';

export default function CustomersFeedBack() {
    return (
        <div className="px-0 px-md-5 pb-5 d-flex justify-content-center flex-column align-items-start">
            <h6 className="px-5 text-start">Testimonials</h6>
            <h1 className="px-5 text-start pb-5">Customers are lovin' it</h1>
            <div className="px-5 d-flex justify-content-center flex-column flex-md-row">
                <div className="cardForComments border border-light-subtle rounded-3 border-2 p-5 m-2">
                    <h5 className="pb-3">Freindly application for restaurants</h5>
                    <p className="fs-6 fs-md-3 text-body-secondary pb-4">This applictaion is user-friendly for both customers and us. It reduces
                        manpower, especially waiters and bill
                        desks. So, I recommend this system to other restaurants.</p>
                    <h5>Vivek S</h5>
                    <h6 className="text-body-secondary">Pinakee Digitech</h6>
                </div>
                <div className="cardForComments border border-light-subtle rounded-3 border-2 p-5 m-2">
                    <h5 className="pb-3">Simple &amp; easy to handle</h5>
                    <p className="fs-6 fs-md-3 text-body-secondary pb-4">By using Tablenoms, managing the menu is as simple as doing 1st grade. By
                        using the restaurant application, modifying the menu is much quicker and easier.</p>
                    <h5>Rajesh</h5>
                    <h6 className="text-body-secondary">Naama Chettiar Veedu</h6>
                </div>
            </div>
        </div>
    )
}