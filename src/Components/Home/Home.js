import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            {/* <div>
                <h5>Trusted by</h5>
            </div> */}
        </div>
    )
}