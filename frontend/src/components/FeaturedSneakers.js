// src/components/FeaturedSneakers.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SneakerCard from './SneakerCard';
import './FeaturedSneakers.css';

const FeaturedSneakers = () => {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        const fetchSneakers = async () => {
            try {
                const response = await axios.get('/api/sneakers/latest');
                setSneakers(response.data);
            } catch (error) {
                console.error("Error fetching sneakers:", error);
            }
        };
        fetchSneakers();
    }, []);

    return (
        <section className="featured-sneakers">
            <h2>Featured Sneakers</h2>
            <p>Check out the latest additions to our collection!</p>
            <div className="sneaker-list">
                {sneakers.map(sneaker => (
                    <SneakerCard key={sneaker.id} sneaker={sneaker} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedSneakers;
