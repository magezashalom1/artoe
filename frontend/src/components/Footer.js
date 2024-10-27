import React from 'react';
import './Footer.css'; // You can create a separate CSS file for footer styles

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="f1">
                    <div className="logo">
                        <img src="./images/logo3.png" alt="Logo" />
                    </div>
                    <h6>Sign Up for News and Promotions</h6>
                    <br /><br />
                    <div className="subscribe">
                        <input type="email" placeholder="Enter Email" />
                        <button><i className="uil uil-arrow-right"></i></button>
                    </div>
                </div>

                <div className="f2">
                    <h4>GO TO</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#why-choose-us">Our Team</a></li>
                        <li><a href="/faqs">FAQs</a></li>
                    </ul>
                </div>

                <div className="f3">
                    <h4>POLICIES</h4>
                    <ul>
                        <li><a href="/terms" target="_blank">Privacy Policy</a></li>
                        <li><a href="/terms" target="_blank">Terms and Conditions</a></li>
                        <li><a href="/terms" target="_blank">Refund Policy</a></li>
                    </ul>
                </div>

                <div className="f4">
                    <h4>Contact Us</h4>
                    <p>
                        +(250) 787 218 771<br /><br />
                        artoe.store@gmail.com
                    </p>
                    <ul className="socials">
                        <li><a href="https://instagram/apple" target="_blank" rel="noopener noreferrer"><i className="uil uil-instagram-alt"></i></a></li>
                        <li><a href="https://facebook/apple" target="_blank" rel="noopener noreferrer"><i className="uil uil-facebook"></i></a></li>
                        <li><a href="https://twitter/apple" target="_blank" rel="noopener noreferrer"><i className="uil uil-twitter"></i></a></li>
                    </ul>
                </div>
            </div>

            <div className="copyright">
                <small>&copy; ArToe - Customized Kicks. All Rights Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;
