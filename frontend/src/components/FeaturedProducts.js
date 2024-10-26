// src/components/FeaturedProducts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch the latest 10 products from the API
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products/latest'); // Adjust this URL as needed
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section id="featured-products">
            <h2>Featured Products</h2>
            <div className="product-list" style={{ overflowY: 'scroll', maxHeight: '400px' }}>
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.main_image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.short_description}</p>
                        <p>${product.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Function to handle adding to cart
const addToCart = (productId) => {
    console.log(`Adding product ${productId} to cart`);
    // Add your cart logic here
};

export default FeaturedProducts;
