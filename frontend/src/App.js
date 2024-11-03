// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SneakerList from './components/SneakerList';
import Sneakers from './pages/Sneakers';
import AboutUs from './pages/AboutUs';
import FAQs from './pages/FAQs';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp'; // Import SignUp
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/sneaker-list" element={<SneakerList />} /> {/* Added route for SneakerList */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} /> {/* Added route for SignUp */}
      </Routes>
    </Router>
  );
}

export default App;
