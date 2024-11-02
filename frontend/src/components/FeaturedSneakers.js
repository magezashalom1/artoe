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
                console.log("Response data:", response.data); // Log the entire response data
                console.log("Data type:", typeof response.data); // Log the data type

                // Check if response.data is an array
                if (Array.isArray(response.data)) {
                    setSneakers(response.data);
                } else {
                    console.error("Expected an array but got:", response.data);
                    setSneakers([]); // Set sneakers to an empty array or handle as needed
                }
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
                {sneakers.map((sneaker) => {
                    const imageURL = `${baseURL.replace(/^http:\/\//i, 'https://')}${sneaker.main_image}`;
                    return (
                        <div key={sneaker.id} className="sneaker-card">
                            <img src={imageURL} alt={sneaker.name} className="sneaker-image" />
                            <h3>{sneaker.name}</h3>
                            <p>{sneaker.short_description}</p>
                            <p>${sneaker.price}</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FeaturedSneakers;
