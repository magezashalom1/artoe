// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    useEffect(() => {
        // Check if user is logged in based on local storage or context
        const token = localStorage.getItem('auth_token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = () => {
        // Log out user (remove token from localStorage and update state)
        localStorage.removeItem('auth_token');
        setIsLoggedIn(false);
        navigate('/'); // Redirect to homepage after logout using navigate
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
                        <li><Link to="/sneakers">Sneakers</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-icons">
                    <button className="hamburger" onClick={handleMenuToggle}>
                        <FaBars />
                    </button>

                    {/* Conditional rendering based on login status */}
                    {isLoggedIn ? (
                        <button onClick={handleLogout}>Logged In | Logout</button>
                    ) : (
                        <Link to="/signup">Sign Up</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
