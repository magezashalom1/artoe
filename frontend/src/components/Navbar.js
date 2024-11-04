// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
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
                        <img src="/images/TextLogo.png" alt="ArToe Logo" />
                    </Link>
                </div>
                <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/sneakers">Sneakers</Link></li> {/* Updated path */}
                        <li><Link to="/about">About Us</Link></li> {/* Updated path */}
                        <li><Link to="/contact">Contact</Link></li> {/* Updated path */}
                    </ul>
                </div>
                <div className="navbar-icons">
                    <button className="hamburger" onClick={handleMenuToggle}>
                        <FaBars />
                    </button>
                    <Link to="/signup" className="signup-button">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
