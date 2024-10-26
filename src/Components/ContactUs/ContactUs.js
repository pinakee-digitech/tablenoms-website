import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

const ContactUs = () => {
    return (
        <div style={{height:"fit-content"}} className="p-0 p-md-5">
            <div className="mx-5 bg-black rounded-4 d-flex justify-content-around flex-column flex-md-row align-items-center p-3 p-md-5">
                <div className="w-100">
                    <h1 className="text-light text-md-start text-center mb-3">Contact our sales team today</h1>
                    <h6 className="text-light text-md-start text-center">Get a free trial</h6>
                </div>
                <div className="w-100 d-flex justify-content-center justify-content-md-end">
                    <button style={{border:"2px solid white", backgroundColor:"black", color:"white"}} className="rounded-3 d-flex flex-row justify-content-center align-items-center px-5 py-2">
                        Contact Us
                        <ArrowRightAltOutlinedIcon className='mx-1'></ArrowRightAltOutlinedIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;