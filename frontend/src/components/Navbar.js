import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: If you want to style the navbar with CSS

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">ArToe</Link>
                <ul className="navbar-menu">
                    <li><Link to="/sneakers">Sneakers</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/faqs">FAQs</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
