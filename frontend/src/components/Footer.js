// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Import CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src="/path/to/your/logo.png" alt="ArToe Logo" /> {/* Replace with your logo path */}
                    <p className="footer-description">
                        Your go-to place for custom-painted sneakers. 
                        Each pair tells a unique story.
                    </p>
                </div>
                <div className="footer-links">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/faqs">FAQs</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ArToe. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
