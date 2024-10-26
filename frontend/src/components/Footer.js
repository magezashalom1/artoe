import React from 'react';
import './Footer.css'; // Create a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 ArToe. All rights reserved.</p>
      <div className="social-links">
        {/* Add social media links */}
        <a href="https://instagram.com">Instagram</a>
        <a href="https://twitter.com">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
