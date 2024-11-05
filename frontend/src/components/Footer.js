// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section footer-left">
                    <Link to="/" className="footer-logo">
                        <img src="/images/logo.png" alt="Full Logo" />
                    </Link>
                    <p className="footer-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </p>
                </div>
                <div className="footer-section footer-center">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/sneakers">Sneakers</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-section footer-right">
                    <h3>Follow Us</h3>
                    <ul className="social-links">
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
