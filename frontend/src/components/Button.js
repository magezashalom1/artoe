import React from 'react';
import './Button.css'; // Create a separate CSS file for styling

const Button = ({ onClick, children }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
