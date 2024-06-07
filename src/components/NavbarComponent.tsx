import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">AzDeskPro</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/faqs">F.A.Q's</Link></li>
                                <li><Link className="dropdown-item" to="/request-demo">Request Demo</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" to="/newsletter">Sign up for our newsletter</Link></li>
                                <li><Link className="dropdown-item" to="/send-email">Send us an email</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;