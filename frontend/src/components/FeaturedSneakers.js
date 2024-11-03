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
                console.log("Fetched sneakers:", response.data); // Log the fetched data
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
                {Array.isArray(sneakers) && sneakers.length > 0 ? ( // Check if sneakers is an array and has items
                    sneakers.map((sneaker) => {
                        const imageURL = sneaker.main_image; // Assuming main_image is a relative path
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
                    <p>No sneakers available</p> // Fallback if sneakers is not an array or is empty
                )}
            </div>
        </div>
    );
};

export default FeaturedSneakers;
