import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
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
        console.log('Form submitted:', formData);
    };

    // Style for the background image
    const backgroundStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/Pink.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
    };

    return (
        <div className="signup-container" style={backgroundStyle}>
            <div className="signup-content">
                <div className="signup-box">
                    <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
                    <p>Welcome back! Please enter your details.</p>
                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div>
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required={!isLogin}
                                />
                            </div>
                        )}
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {isLogin && (
                            <div className="forgot-password">
                                <a href="#" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
                            </div>
                        )}
                        <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
                    </form>
                    <p className="alternative">Or continue with:</p>
                    <button className="google-button">
                        <img src="/images/google-icon.png" alt="Google" /> Google
                    </button>
                    <p className="switch-auth">
                        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                        <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
                            {isLogin ? 'Sign Up' : 'Log In'}
                        </span>
                    </p>
                </div>
                <div className="signup-image">
                    <img src="/images/Sign.jpg" alt="Sign Up" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
