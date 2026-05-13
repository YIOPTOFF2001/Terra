import React, { useState } from "react";
import '../styles/GetStarted.css';
import { Link, useNavigate } from "react-router-dom";

function GetStarted() {
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  return (
    <div className="role-page" id="rolePage">
      <Link to="/" className="back-link">
        ← Back to home
      </Link>
      <div className="role-logo">TER<span>RA</span></div>
      <h1 className="role-heading">Who are you?</h1>
      <p className="role-sub">Choose your role to get started. You can always change this later.</p>
      <div className="role-cards">
        <div
          className={`role-card farmer ${selectedRole === 'farmer' ? 'active' : ''}`}
          onClick={() => setSelectedRole('farmer')}
        >
          <div className="role-check">✓</div>
          <div className="role-icon">🌱</div>
          <div className="role-title">Farmer</div>
          <div className="role-desc">I have quality produce and I would like to sell to Terra.</div>
          <div className="role-arrow">→</div>
        </div>
        <div
          className={`role-card investor ${selectedRole === 'vendor' ? 'active' : ''}`}
          onClick={() => setSelectedRole('vendor')}
        >
          <div className="role-check">✓</div>
          <div className="role-icon">🏪</div>
          <div className="role-title">Vendor</div>
          <div className="role-desc">I want to stock from Terra and sell to my community.</div>
          <div className="role-arrow">→</div>
        </div>
      </div>
      <button className={`role-continue ${selectedRole ? 'ready' : ''}`}  onClick={() => selectedRole && navigate(`/login/${selectedRole}`)}>
        Continue →
      </button>
      <p className="role-signin">Already have an account? <Link to="/signin">Sign in</Link></p>
    </div>
  );
}
export default GetStarted;
