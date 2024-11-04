import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FeaturedSneakers.css';

const baseURL = process.env.REACT_APP_BASE_URL; // Ensure this is set correctly in your .env

const FeaturedSneakers = () => {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        const fetchSneakers = async () => {
            const url = `${baseURL}/api/sneakers/latest/`; // Construct the full URL
            console.log("Fetching from:", url); // Debug log
            try {
                const response = await axios.get(url);
                console.log("Fetched sneakers:", response.data);
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
                {Array.isArray(sneakers) && sneakers.length > 0 ? (
                    sneakers.map((sneaker) => {
                        const imageURL = sneaker.main_image; // Directly use the main image URL
                        return (
                            <div key={sneaker.id} className="sneaker-card">
                                <img src={imageURL} alt={sneaker.name} className="sneaker-image" />
                                <h3>{sneaker.name}</h3>
                                <p>{sneaker.short_description}</p>
                                <p>${sneaker.price}</p>
                                <button className="add-to-cart">Add to Cart</button>
                            </div>
                        );
                    })
                ) : (
                    <p>No sneakers available</p>
                )}
            </div>
        </div>
    );
};

export default FeaturedSneakers;
