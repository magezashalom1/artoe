// src/pages/ContactUs.js

import React, { useState } from 'react';
import './ContactUs.css'; // Import the CSS for styling
import Footer from '../components/Footer'; // Import Footer

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact Form submitted:', formData);
    };

    return (
        <div className="contact-container">
            <div className="contact-box">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <Footer /> {/* Ensure Footer is placed outside the contact box */}
        </div>
    );
};

export default ContactUs;
