import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyFeaturesImg from '../../img/KeyFeaturesImg.svg';
import DigitalMenu from '../../img/KeyFeaturesIconMenu.svg';
import ScanOrder from '../../img/KeyFeaturesIconScan.svg';
import Inventory from '../../img/KeyFeaturesIconInventory.svg';
import PaymentSupport from '../../img/KeyFeaturesIconPayment.svg';

export default function KeyFeatures() {

    const keyFeatures = [
        {
            src: DigitalMenu,
            title: "Digital Menu",
            info: `Create your digital menu with a theme color of your choice.
            Change or improve your menu design and place your bestsellers or combos at the top of the menu.`
        },
        {
            src: ScanOrder,
            title: "Scan & Order",
            info: `Customers scan the QR code with their phone camera to access the food digital menu without downloading any app.
            Then the customers can place their order and pay instantly in a few clicks and enjoy their food delivered directly to their table.`
        },
        {
            src: Inventory,
            title: "Inventory",
            info: `45% of the full service restaurants failed to grow in profits without food management effectively.
            Inventory management systems help food businesses to keep track of their stocks levels which reduces overstocking and wastages.
            This system with real time data inventory levels, helps them to make more informed decisions about ordering and stocking food items.`
        },
        {
            src: PaymentSupport,
            title: "Payment Support",
            info: `A strong payment gateway is integrated, so the customer pays online. The payment is credited to your wallet immediately.
            This guarantees the safety and protection of you and your customers at all times`
        }

    ]
    return (
        <div style={{ backgroundColor: "white", height: "fit-content" }}>
            <h1 className='text-center pt-5 mb-5'>Key Features</h1>
            <div className='w-100 d-flex justify-content-center align-items-center flex-row pb-4 px-4'>
                <div className='w-50 d-flex justify-content-center align-items-center flex-row'>
                    <img className='w-75' src={KeyFeaturesImg} alt="img" />
                </div>
                <div className='w-50 d-flex justify-content-around align-items-center flex-row flex-wrap pe-5'>
                    {keyFeatures.map((data) =>
                        <div className='d-flex justify-content-center align-items-center flex-row'>
                            <img className='me-2 mb-auto' style={{ width: "6%" }} src={data.src} alt="icon" />
                            <div className='mb-3'>
                                <h4>{data.title}</h4>
                                <p className='mb-1'>{data.info}</p>
                                <a className='text-decoration-none' style={{ color: "#e1cb00" }} href="/">Learn more &#10095;</a>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    )
}