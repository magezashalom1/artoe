import React from 'react';
import './HeroSection.css'; // Create a separate CSS file for styling

const HeroSection = ({ title, subtitle, image }) => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${image})` }}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default HeroSection;
