import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Correct import path for HomePage
import SneakerList from './components/SneakerList'; // Import SneakerList component
import Products from './pages/Products'; // Import Products page
import AboutUs from './pages/AboutUs'; // Correct import path for AboutUs page
import FAQs from './pages/FAQs'; // Import FAQs page
import ContactUs from './pages/ContactUs'; // Correct import path for ContactUs page
import Navbar from './components/Navbar'; // Import Navbar component
import './App.css'; // Import general styles

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Render HomePage on the root path */}
        <Route path="/sneakers" element={<SneakerList />} /> {/* Route for SneakerList */}
        <Route path="/products" element={<Products />} /> {/* Route for Products */}
        <Route path="/about" element={<AboutUs />} /> {/* Route for AboutUs */}
        <Route path="/faqs" element={<FAQs />} /> {/* Route for FAQs */}
        <Route path="/contact" element={<ContactUs />} /> {/* Route for ContactUs */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
