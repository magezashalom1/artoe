import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

import './HomePage.css'; // Assuming you'll add custom styling here

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />

      <header className="header-container">
        <div className="header-info">
          <h1>ArToe</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <Button link="/products">View Products</Button> 
        </div>
        <div className="header-image">
        <img src="/images/Plant.png" alt="Header"/>
        </div>
      </header>
      {/* <Footer /> */}
    </div>
  );
};

export default Homepage;
