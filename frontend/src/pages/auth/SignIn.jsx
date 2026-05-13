import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/Login.css';

function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Invalid email or password');
        setLoading(false);
        return;
      }

      // save token to localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      localStorage.setItem('name', data.name);

      // redirect based on role
      if (data.role === 'farmer') navigate('/dashboard/farmer');
      else if (data.role === 'vendor') navigate('/dashboard/customer');
      else if (data.role === 'admin') navigate('/dashboard/admin');

    } catch (err) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <Link to="/" className="back-link">← Back to home</Link>

      <div className="login-box">
        <div className="role-logo">TER<span>RA</span></div>

        <div className="login-role-badge" style={{background: 'rgba(42,92,34,0.08)', color: '#2A5C22'}}>
          Welcome back
        </div>

        <h1 className="login-heading">Sign in</h1>
        <p className="login-sub">Enter your details and we'll take you straight to your dashboard.</p>

        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-field">
            <div className="login-field-top">
              <label>Password</label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
            <div className="password-wrap">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="show-pass"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button type="submit" className="login-btn farmer-btn" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in to Terra →'}
          </button>
        </form>

        <p className="login-switch">
          Don't have an account? <Link to="/get-started">Get started</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;