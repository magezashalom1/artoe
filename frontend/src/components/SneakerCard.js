// src/components/SneakerCard.js
import React from 'react';
import './SneakerCard.css';

const SneakerCard = ({ sneaker }) => {
    return (
        <div className="sneaker-card">
            <img src={sneaker.main_image} alt={sneaker.name} className="sneaker-image" />
            <div className="sneaker-info">
                <h3>{sneaker.name}</h3>
                <p>{sneaker.short_description}</p>
                <p>${sneaker.price}</p>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    );
};

export default SneakerCard;
