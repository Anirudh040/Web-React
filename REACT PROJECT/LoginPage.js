import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

function LoginPage({ setLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for error message
    const [success, setSuccess] = useState(false); // State for success tick animation
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation check for empty fields
        if (!email || !password) {
            setErrorMessage('Please enter both email and password.'); // Set error message
            return; // Exit the function if validation fails
        }

        try {
            const response = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);
            if (response.data.length > 0) {
                setLoggedIn(true);
                setSuccess(true); // Trigger success tick animation
                setTimeout(() => {
                    navigate('/'); // Redirect to home after a short delay
                }, 1000); // 1 second delay for the animation
            } else {
                setErrorMessage('Invalid credentials, please sign up.'); // Set error message
            }
        } catch (error) {
            console.error("Error during login:", error);
            setErrorMessage('An error occurred. Please try again.'); // Set error message
        }
    };

    return (
        <div className="login-container">
            <h2>Login to Meeting Scheduler</h2>
            {errorMessage && <div className="error-popup">{errorMessage}</div>} {/* Display error message as popup */}
            {success && <div className="tick-animation">✔️</div>} {/* Display tick animation on success */}
            <form className="login-form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setErrorMessage(''); // Clear error message on input
                        setSuccess(false); // Reset success state on input
                    }}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setErrorMessage(''); // Clear error message on input
                        setSuccess(false); // Reset success state on input
                    }}
                />
                <button type="submit">Login</button>
            </form>
            <p className="redirect">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
}

export default LoginPage;
