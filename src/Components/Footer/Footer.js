import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    return (
        <div className="px-5 my-5">
            <div className="d-flex justify-content-evenly flex-column flex-md-row align-items-start">
                <p className="py-5">A complete food order management solution for restaurants, hotels, cafes, bars, food courts, and corporates in one application.</p>
                <div className="w-100 d-flex justify-content-around flex-row">
                    <div className="d-flex justify-content-center flex-column align-items-start height-100">
                        <h6>Pages</h6>
                        <a className="hover text-secondary-emphasis text-decoration-none" href="/">Home</a>
                        <a className="hover text-secondary-emphasis text-decoration-none" href="/">About Us</a>
                        <a className="hover text-secondary-emphasis text-decoration-none" href="/">Contact Us</a>
                        <a className="hover text-secondary-emphasis text-decoration-none" href="/">Blog</a>
                    </div>
                    <div className="height-100 d-flex justify-content-start flex-column align-items-start">
                        <h6>Contact</h6>
                        <a className=" text-secondary-emphasistext-decoration-none" href="/">tablenoms.com</a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between flex-column flex-md-row align-items-center">
                <div className="d-flex justify-content-center flex-row align-items-center mb-2">
                    <a className="hover text-secondary-emphasis text-decoration-none mx-2" href="/">Privacy Policy</a>
                    <a className="hover text-secondary-emphasis text-decoration-none mx-2" href="/">Terms &amp; Conditions</a>
                    <a className="hover text-secondary-emphasis text-decoration-none mx-2" href="/">Cookie Policy</a>
                    <a className="hover text-secondary-emphasis text-decoration-none mx-2" href="/">Refund &amp; Cancellation</a>
                </div>
                <div className="d-flex justify-content-center flex-row align-items-center">
                    <p className="m-0">© 2024 All Rights Reserved by <a className="hover text-secondary-emphasis text-decoration-none" href="/">Tablenoms</a></p>
                </div>
            </div>
        </div>
    )
}