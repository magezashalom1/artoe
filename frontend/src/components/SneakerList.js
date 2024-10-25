import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div>
            <h1>Sneakers</h1>
            <ul>
                {sneakers.map(sneaker => (
                    <li key={sneaker.id}>{sneaker.name} - ${sneaker.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default SneakerList;
