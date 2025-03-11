import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock authentication logic
    if (email === 'test@example.com' && password === 'password') {
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/dashboard'); // Redirect to dashboard after login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-overlay">
          <h1>Welcome Back!</h1>
          <p>Continue your fitness journey with us</p>
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-form-container">
          <h2>Sign In</h2>
          <p className="auth-subtitle">Get back to your workout routine</p>
          
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="auth-button">
              Sign In
            </button>
          </form>

          <p className="auth-redirect">
            New to FitLife? <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 