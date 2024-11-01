// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedSneakers from '../components/FeaturedSneakers';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <header className="header-container">
                <div className="header-info">
                    <h1>ArToe</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <Link to="/sneakers" className="store-button">Cop One</Link> {/* Adjusted link path */}
                </div>
                <div className="header-image">
                    <video src="/images/Comercial.mp4" autoPlay loop muted className="header-video" />
                </div>
            </header>
            <FeaturedSneakers /> {/* Renders the Featured Sneakers section */}
        </div>
    );
};

export default HomePage;
