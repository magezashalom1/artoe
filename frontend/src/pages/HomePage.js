import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturedProducts from '../components/FeaturedProducts';
import './HomePage.css'; // Import HomePage-specific styles

const HomePage = () => {
    return (
        <div>
            <Navbar />

            <header>
                <div className="header-container">
                    <div className="info">
                        <div className="delivery">
                            <small><b>Free Delivery In Kigali</b></small>
                            <i className="uil uil-truck"></i>
                        </div>
                        <h1>Cop Your IKEECI</h1>
                        <p>
                            Acquire Your Own IKEECI From The Number #1 Brand In Town Our Kicks Are Guaranteed To Give You Wings
                        </p>
                        <div className="cta">
                            <a href="#" id="show-commercial-btn" className="btn btn-primary">See Product Samples</a>
                        </div>
                    </div>

                    <div className="header-image">
                        <img src="./images/header.png" alt="Header" />
                    </div>
                </div>
            </header>

            <section id="commercial">
                <div className="container">
                    <video controls autoPlay>
                        <source src="./images/commercial.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>

            <section id="products">
                <div className="container">
                    <h2>Our Customized Products</h2>
                    <p>
                        Launched in 2023, IKEECI has brought multiple international brands to your hometown.
                        We are also turning things up by customizing the usual same old sneakers to match
                        your personal styles and preferences.
                    </p>
                    <img src="./images/fireshoes.png" alt="Fire Shoes" />
                    <article className="product-info">
                        <div className="info">
                            <h2>We recreate <br /> Your IDEAS & DESIGNS</h2>
                            <p>
                                You can order our already existing designs as by referring to our social media pages and website,
                                but that's not the limit. You can also create your own custom design by choosing any personalization.
                            </p>
                        </div>
                        <div className="image">
                            <img src="./images/2.png" alt="Design Example" />
                        </div>
                    </article>
                </div>
            </section>

            <FeaturedProducts />

            <section id="why-choose-us">
                <div className="container">
                    <h2>Our Team</h2>
                    <div className="team-head">
                        <div className="team-left">
                            <h6 style={{ fontSize: 'larger', color: 'rgba(0, 0, 0, 0.372)' }}><b>SHALOM MAGEZA</b></h6>
                            <h5 style={{ fontSize: 'medium', color: 'rgba(0, 0, 0, 0.372)' }}>Founder & Artist</h5>
                            <h6 style={{ fontSize: 'larger', color: 'rgba(0, 0, 0, 0.372)' }}><b>SH P</b></h6>
                            <h5 style={{ fontSize: 'medium', color: 'rgba(0, 0, 0, 0.372)' }}>Co-Founder & Developer</h5>
                        </div>
                        <div className="team-right">
                            <div className="team-image">
                                <img src="./images/Stamp.png" alt="Team Stamp" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faqs">
                <div className="container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-content">
                        <article>
                            <div className="icon"><i className="uil uil-plus"></i></div>
                            <div className="detail">
                                <h4>How can I place a personalized order?</h4>
                                <p>You can order our existing designs or create your own custom design by choosing any personalization.</p>
                            </div>
                        </article>
                        {/* Add more FAQs here */}
                    </div>
                    <a href="/faqs.html" className="btn">More Questions</a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;
