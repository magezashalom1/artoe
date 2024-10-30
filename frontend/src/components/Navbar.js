import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaShoppingCart, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <Link to="/" className="navbar-logo">
                        <img src="/images/logo.png" alt="ArToe Logo" />
                    </Link>
                </div>
                <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/pages/Products">Sneakers</Link></li>
                        <li><Link to="/pages/AboutUs">About Us</Link></li>
                        <li><Link to="/pages/ContactUs">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-icons">
                    <button className="hamburger" onClick={handleMenuToggle}>
                        <FaBars />
                    </button>
                    <Link to="/profile"><FaUserCircle /></Link>
                    <Link to="/cart"><FaShoppingCart /></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
