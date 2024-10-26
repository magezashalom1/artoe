import React from 'react';
import './ProductCard.css'; // Create a separate CSS file for styling

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.shortDescription}</p>
      <p>${product.price}</p>
      <button className="btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
