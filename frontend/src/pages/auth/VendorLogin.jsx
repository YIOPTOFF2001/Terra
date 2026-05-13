import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/Login.css';

function VendorLogin() {
  const [formData, setFormData] = useState({ name: '', phone: '', location: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, role: 'vendor' })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      alert(data.message);
    } catch (error) {
      console.error('Vendor registration error:', error);
      alert(`Something went wrong. ${error.message}`);
    }
  };

  return (
    <div className="login-page">
      <Link to="/" className="back-link">← Back to home</Link>

      <div className="login-box">
        <div className="role-logo">TER<span>RA</span></div>

        <div className="login-role-badge vendor-badge">
          <span>🏪</span> Vendor portal
        </div>

        <h1 className="login-heading">Welcome to Terra</h1>
        <p className="login-sub">Sign up to browse fresh produce and manage your orders.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-field">
            <label>Phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+258 84 123 4567"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-field">
            <label>Location (province/area)</label>
            <input
              type="text"
              name="location"
              placeholder="Maputo Province"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

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

          <button type="submit" className="login-btn vendor-btn">
            Create account →
          </button>
        </form>

        <p className="login-switch">
          Not a vendor? <Link to="/login/farmer">Sign up as farmer</Link>
        </p>
        <p className="login-switch">
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default VendorLogin;