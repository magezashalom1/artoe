// src/components/FeaturedSneakers.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FeaturedSneakers.css';

const baseURL = process.env.REACT_APP_BASE_URL; // Define baseURL outside of the component functions

const FeaturedSneakers = () => {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        const fetchSneakers = async () => {
            try {
                const response = await axios.get(`${baseURL}/api/sneakers/latest/`);
                setSneakers(response.data);
            } catch (error) {
                console.error("Error fetching sneakers:", error);
            }
        };

        fetchSneakers();
    }, []);

    return (
        <div className="featured-sneakers">
            <h2>Featured Sneakers</h2>
            <p>Check out our latest selections!</p>
            <div className="sneaker-list">
                {sneakers.map((sneaker) => (
                    <div key={sneaker.id} className="sneaker-card">
                        <img src={`${baseURL}${sneaker.main_image}`} alt={sneaker.name} className="sneaker-image" />
                        <h3>{sneaker.name}</h3>
                        <p>{sneaker.short_description}</p>
                        <p>${sneaker.price}</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedSneakers;
