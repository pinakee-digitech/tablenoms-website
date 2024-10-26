import React, { useState } from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/logo.png';

export default function Header() {
    const[navCollapse, setNavCollapse] = useState(false);

    return (
        <header className='px-2 px-sm-5' style={{backgroundColor:"white"}}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img className="navbar-brand" src={logo} alt="Logo" />
                    <button onClick={()=> navCollapse?setNavCollapse(false):setNavCollapse(true)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end align-items-center flex-row" id="navbarNavDropdown">
                        <ul className={navCollapse?"navbar-nav ":"navbar-nav d-none d-lg-flex"}>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold px-3 active" id="home" href="/" routerLink="/" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold px-3" id="aboutUs" href="/" >About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold px-3" id="contactUs" href="/" routerLink="/contact" >Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold px-3" id="blog" href="/">Blog</a>
                            </li>
                            <li className="rounded-3" style={{border:"2px solid #444444"}}>
                                <a className="nav-link fw-semibold px-3" href="/">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}