import React from "react";  
import '../styles/GetStarted.css';
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <div className="role-page" id="rolePage">
      <Link to="/" className="back-link">
      ← Back to home
      </Link> 
  <div className="role-logo">TER<span>RA</span></div>
  <h1 className="role-heading">Who are you?</h1>
  <p className="role-sub">Choose your role to get started. You can always change this later.</p>
  <div className="role-cards">
    <div className="role-card farmer" onClick={() => selectRole(this)}>
      <div className="role-check">✓</div>
      <div className="role-icon">🌱</div>
      <div className="role-title">Farmer</div>
      <div className="role-desc">I have land and need funding to grow my farm.</div>
      <div className="role-arrow">→</div>
    </div>
    <div className="role-card investor" onClick={() => selectRole(this)}>
      <div className="role-check">✓</div>
      <div className="role-icon">💰</div>
      <div className="role-title">Investor</div>
      <div className="role-desc">I want to invest in African agriculture and earn returns.</div>
      <div className="role-arrow">→</div>
    </div>
  </div>
  <button className="role-continue" id="roleBtn">Continue →</button>
  <p className="role-signin">Already have an account? <a href="#">Sign in</a></p>
</div>
  );
}
export default GetStarted;
