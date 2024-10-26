import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import PaymentImg from '../../img/credit-card.svg';

export default function Payments() {
    return (
        <div className='my-5 my-md-0 payments-card w-100 d-flex justify-content-center align-items-center flex-column flex-md-row'>
            <div className='image-width d-flex justify-content-center align-items-center flex-row'>
                <img className='w-75' src={PaymentImg} alt="img" />
            </div>
            <div className='card-width d-flex justify-content-center align-items-center flex-row'>
                <div className='pe-4 w-75 d-flex justify-content-center align-items-start flex-column'>
                    <h1 className='text-start'>Take payments on your terms</h1>
                    <p>Tablenoms provides a safe and secure payment gateway which accepts UPI, credit & debit cards and all online payments.</p>
                    <div className='d-flex justify-content-center align-items-center flex-row mb-3'>
                        <TrendingUpIcon className='fs-1 me-2' style={{color:"#e1cb00"}}></TrendingUpIcon>
                        <p className='m-0'>Instant credit amount in your wallet</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center flex-row mb-3'>
                        <WorkOutlineRoundedIcon className='fs-1 me-2' style={{color:"#e1cb00"}}></WorkOutlineRoundedIcon>
                        <p className='m-0'>Split payment</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center flex-row mb-3'>
                        <ShieldOutlinedIcon className='fs-1 me-2' style={{color:"#e1cb00"}}></ShieldOutlinedIcon>
                        <p className='m-0'>24/7 Support team</p>
                    </div>
                </div>
            </div>
        </div>
    )
}