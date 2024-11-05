// src/pages/AboutUs.js

import React from 'react';
import './AboutUs.css';
import Footer from '../components/Footer'; // Import Footer

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <div className="about-us-text">
                    <h1>Changing the world through customised wearable experiences</h1>
                    <p>
                        Artoe was invented by Shalom Mageza, a tech enthusiast with a vision for unique,
                        customized fashion. Our mission is to provide a seamless blend of art and technology,
                        making each sneaker a piece of art that speaks to the wearer. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
                <div className="about-us-image">
                    <img src="/images/Floating.png" alt="Floating Sneaker" />
                </div>
            </div>
            <Footer /> {/* Include the Footer here */}
        </div>
    );
};

export default AboutUs;
