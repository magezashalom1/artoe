import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SneakerList.css'; // Import the CSS file

const SneakerList = () => {
    const [sneakers, setSneakers] = useState([]); // Initialize state for sneakers

    useEffect(() => {
        const fetchSneakers = async () => {
            try {
                // Replace 'http://localhost:8000' with your backend's URL in production
                const response = await axios.get('http://localhost:8000/api/sneakers/');
                setSneakers(response.data); // Store fetched sneakers in state
            } catch (error) {
                console.error('Error fetching sneakers:', error);
            }
        };

        fetchSneakers(); // Fetch sneakers on component mount
    }, []);

    return (
        <div className="sneaker-list">
            <h1>Sneakers</h1>
            <ul>
                {sneakers.map(sneaker => (
                    <li key={sneaker.id}>
                        <span>{sneaker.name}</span>
                        <span className="price">${sneaker.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SneakerList;
