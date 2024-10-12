import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrustedByImg1 from '../../img/TrustedBy1.png';
import TrustedByImg2 from '../../img/TrustedBy2.png';
import TrustedByImg3 from '../../img/TrustedBy3.png';
import TrustedByImg4 from '../../img/TrustedBy4.png';
import TrustedByImg5 from '../../img/TrustedBy5.png';

export default function Home() {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column px-5' style={{ height: "90vh" }}>
            <h1 className='fw-bold text-center px-5' style={{fontSize:'3.5rem'}}>Cloud-based POS system for your business - online & offline</h1>
            <p className='fs-4 text-center px-5'>World's leading comprehensive cloud-based food order management system serving restaurants, cinemas,
                 hotels, corporates and stadiums in one application.</p>
            <div className='mb-5'>
                <button className="rounded-3 px-3 py-2 mx-3 fw-semibold" style={{border:"2px solid #444444", backgroundColor:"white"}} >Book Demo</button>
                <button className="rounded-3 px-3 py-2 mx-3 fw-semibold" style={{
                    border:"2px solid #e1cb00", 
                    backgroundColor:"#e1cb00",
                    color:"white"
                    }} >Get Price</button>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <h5 className='mb-3'>Trusted by</h5>
                <div className='w-100 d-flex justify-content-around align-items-center flex-row'>
                    <img className='rounded-3' style={{width:"12%", boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}} src={TrustedByImg1} alt="img" />
                    <img className='rounded-3' style={{width:"12%", boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}} src={TrustedByImg2} alt="img" />
                    <img className='rounded-3' style={{width:"12%", boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}} src={TrustedByImg3} alt="img" />
                    <img className='rounded-3' style={{width:"12%", boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}} src={TrustedByImg4} alt="img" />
                    <img className='rounded-3' style={{width:"12%", boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}} src={TrustedByImg5} alt="img" />
                </div>
            </div>
        </div>
    )
}