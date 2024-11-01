// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedSneakers from '../components/FeaturedSneakers'; // Adjust the path if necessary
import './HomePage.css';

const Homepage = () => {
    return (
        <div className="homepage">
            <header className="header-container">
                <div className="header-info">
                    <h1>ArToe</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <Link to="/pages/Sneakers" className="store-button">Cop One</Link>
                </div>
                <div className="header-image">
                    <video src="/images/Comercial.mp4" autoPlay loop muted className="header-video" />
                </div>
            </header>
            <FeaturedSneakers /> {/* Add the FeaturedSneakers component here */}
        </div>
    );
};

export default Homepage;
