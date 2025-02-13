import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle the login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    setError('');

    try {
      const response = await axios.post(`${process.env.REACT_APP_NODE_BACKEND_URL}/api/auth/login`, { email, password });

      if (response.data.success) {
        setUser({ email });
        navigate('/'); 
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      console.error('Login failed', error);
      setError('Login failed. Please try again.');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="main-login">
     
      <div className="custom-login-container">
        <h2>Welcome back!</h2>
        <p>Please enter your details to sign in.</p>
        <form onSubmit={handleLogin} className="custom-login-form">
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="custom-btn">Sign In</button>
          {error && <div className="custom-error-msg">{error}</div>}
          <button onClick={handleCancel} className="custom-cancel-btn">
            Cancel
          </button>
         
        </form>

        <p className="custom-register-link">
          Don't have an account yet? <a href="/register"><span style={{fontWeight : "bold", color : "black"}}>Sign Up</span></a>
        </p>
      </div>
    </div>
  );
};

export default Login;
