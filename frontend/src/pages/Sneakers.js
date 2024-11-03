// src/pages/Sneakers.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'; // Adjust the path if necessary
import './Sneakers.css'; // CSS file for styling

const Sneakers = () => {
    const [sneakers, setSneakers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('name'); // Default sort by name

    useEffect(() => {
        const fetchSneakers = async () => {
            try {
                const response = await axios.get('/api/sneakers/'); // Update with your actual API endpoint
                setSneakers(response.data);
            } catch (error) {
                console.error("Error fetching sneakers:", error);
            }
        };

        fetchSneakers();
    }, []);

    // Filter and sort sneakers based on search term and sort option
    const filteredSneakers = sneakers
        .filter(sneaker => sneaker.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortOption === 'price') {
                return a.price - b.price;
            } else if (sortOption === 'recent') {
                return new Date(b.created_at) - new Date(a.created_at); // Assuming 'created_at' field exists
            } else {
                return a.name.localeCompare(b.name); // Default sorting by name
            }
        });

    return (
        <div className="sneakers-page">
            <Navbar />
            <div className="sneakers-container">
                <h2>Our Sneakers</h2>
                <input
                    type="text"
                    placeholder="Search for sneakers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <select onChange={(e) => setSortOption(e.target.value)} className="sort-select">
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="recent">Sort by Recently Added</option>
                </select>
                <div className="sneaker-list">
                    {filteredSneakers.map((sneaker) => (
                        <div key={sneaker.id} className="sneaker-card">
                            <img src={sneaker.main_image} alt={sneaker.name} className="sneaker-image" />
                            <h3>{sneaker.name}</h3>
                            <p>{sneaker.short_description}</p>
                            <p>${sneaker.price}</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sneakers;
