// src/pages/EachSneaker.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './EachSneaker.css'; // CSS file for styling

const EachSneaker = () => {
    const { id } = useParams(); // Get the sneaker ID from the URL
    const [sneaker, setSneaker] = useState(null);

    useEffect(() => {
        const fetchSneakerDetails = async () => {
            try {
                const response = await axios.get(`/api/sneakers/${id}/`);
                setSneaker(response.data);
            } catch (error) {
                console.error("Error fetching sneaker details:", error);
            }
        };

        fetchSneakerDetails();
    }, [id]);

    if (!sneaker) return <div>Loading...</div>; // Display loading while fetching data

    return (
        <div className="each-sneaker-page" style={{ backgroundColor: 'white' }}>
            <div className="sneaker-details">
                <div className="sneaker-info">
                    <h2>{sneaker.name}</h2>
                    <p>{sneaker.long_description}</p>
                    <p>Price: ${sneaker.price}</p>
                    <p>Size: {sneaker.size}</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="sneaker-image">
                    <img src={sneaker.main_image} alt={sneaker.name} />
                </div>
            </div>
            <div className="extra-images">
                <h3>Additional Images</h3>
                <div className="extra-images-grid">
                    {sneaker.additional_image_1 && (
                        <img src={sneaker.additional_image_1} alt="Additional Sneaker" />
                    )}
                    {sneaker.additional_image_2 && (
                        <img src={sneaker.additional_image_2} alt="Additional Sneaker" />
                    )}
                    {sneaker.additional_image_3 && (
                        <img src={sneaker.additional_image_3} alt="Additional Sneaker" />
                    )}
                    {sneaker.additional_image_4 && (
                        <img src={sneaker.additional_image_4} alt="Additional Sneaker" />
                    )}
                </div>
                <div className="lorem-paragraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    suscipit, nisl eget aliquam lacinia, nunc augue hendrerit libero,
                    eu tristique nisl justo nec eros. Vivamus sit amet vehicula
                    metus, sed volutpat est.</p>
                </div>
            </div>
        </div>
    );
};

export default EachSneaker;
