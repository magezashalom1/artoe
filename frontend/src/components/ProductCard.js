import React from 'react';
import './ProductCard.css';

const ProductCard = ({ sneaker }) => {
    return (
        <div className="product-card">
            <img src={sneaker.main_image} alt={sneaker.name} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{sneaker.name}</h3>
                <p className="product-description">{sneaker.short_description}</p>
                <p className="product-price">${sneaker.price}</p>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
