import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/logo.png';

export default function Header() {
    return (
        <header className='px-5' style={{backgroundColor:"white"}}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img className="navbar-brand" style={{ width: "6%" }} src={logo} alt="Logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end align-items-center flex-row" id="navbarNavDropdown">
                        <ul className="navbar-nav">
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