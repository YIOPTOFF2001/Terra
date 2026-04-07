import React from 'react'
import Footer from '../components/Footer'
import '../styles/Landing.css'
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>

      <div className="t">
        <nav className="nav">
          <div className="logo">TER<span>RA</span></div>
          <ul className="nav-links">
            <li><a href="#">How it works</a></li>
            <li><a href="#">Farmers</a></li>
            <li><a href="#">Investors</a></li>
          </ul>
          <Link to="/get-started">
          <button className="nav-cta">Get started</button>
          </Link>
        </nav>

        <div className="hero">
          <div className="hero-left">
            <div className="hero-badge">🌍  Mozambique • Est. 2026</div>
            <h1>Invest in the earth.<br /><em>Feed the future.</em></h1>
            <p>Terra connects investors with verified Mozambican farmers. Fund real agriculture, earn fixed returns, and help build food security — one harvest at a time.</p>
            <div className="hero-btns">
              <button className="btn-p">Start investing</button>
              <button className="btn-s">I am a farmer</button>
            </div>
            <div className="lang">
              <button className="lang-btn active">EN</button>
              <button className="lang-btn">PT</button>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-right-pattern" />
            <div className="hero-card">
              <div className="hero-card-top">
                <div>
                  <div className="farmer-name">João Machava</div>
                  <div className="farmer-loc">Gaza Province, Mozambique</div>
                </div>
                <div className="vcbadge">VERIFIED</div>
              </div>
              <div className="crop-tag">🍅 Tomato farming • Season 3</div>
              <div className="mini-stats">
                <div className="ms"><div className="ms-n">10%</div><div className="ms-l">Fixed return</div></div>
                <div className="ms"><div className="ms-n">3mo</div><div className="ms-l">Duration</div></div>
                <div className="ms"><div className="ms-n">★ 5.0</div><div className="ms-l">Rating</div></div>
              </div>
              <div className="prog-label"><span>Funding progress</span><span>35,000 / 50,000 MZN</span></div>
              <div className="prog"><div className="prog-fill" /></div>
              <button className="invest-b">Invest in this farm ?</button>
            </div>
            <div className="hero-quote">
              <p>"My farm has been in my family for three generations. Terra helped me grow faster than I ever could alone."</p>
              <span>— João  Machava, Gaza Province</span>
            </div>
          </div>
        </div>

        <div className="stats">
          <div className="stat"><div className="stat-n">847</div><div className="stat-l">Verified farmers on Terra</div></div>
          <div className="stat"><div className="stat-n">12%</div><div className="stat-l">Average fixed return</div></div>
          <div className="stat"><div className="stat-n">3mo</div><div className="stat-l">Shortest investment cycle</div></div>
        </div>

        <section className="sec">
          <div className="sec-tag">How it works</div>
          <h2>Simple. Transparent.<br />Built for Africa.</h2>
          <p>Three steps from your wallet to a Mozambican farm — with AI guiding every decision in plain language.</p>
          <div className="how">
            <div className="hc">
              <div className="hc-n">01</div>
              <h3>Discover</h3>
              <p>Browse verified farmers. Our AI matches you to projects that fit your budget, timeline and risk appetite.</p>
            </div>
            <div className="hc">
              <div className="hc-n">02</div>
              <h3>Invest</h3>
              <p>Fund a farmer directly or join a community pool. Money is held securely and released in milestone stages.</p>
            </div>
            <div className="hc">
              <div className="hc-n">03</div>
              <h3>Earn</h3>
              <p>After harvest receive your investment plus your agreed fixed return — paid to your Terra wallet.</p>
            </div>
          </div>
        </section>

        <div className="div" />

        <section className="sec">
          <div className="sec-tag">Live opportunity</div>
          <h2>Meet João.<br/>He needs your help.</h2>
          <p>Every farmer on Terra is real, verified, and building something. This is what your investment looks like.</p>
          <div className="fc">
            <div className="fc-left">
              <h3>João Machava</h3>
              <div className="sub">Gaza Province • 8 years farming • 2 completed cycles</div>
              <div className="fc-tags">
                <div className="fc-tag">Tomatoes</div>
                <div className="fc-tag">Short term</div>
                <div className="fc-tag">Low risk</div>
                <div className="fc-tag n">Returns Aug 2026</div>
              </div>
              <div className="roadmap">
                <h4>Farmer roadmap</h4>
                <div className="rm-item">
                  <div className="rm-dot" />
                  <div className="rm-text"><strong>Current — Tomato Season 3</strong>Scaling crop with improved seeds</div>
                </div>
                <div className="rm-item">
                  <div className="rm-dot f" />
                  <div className="rm-text"><strong>Next — Irrigation equipment</strong>Increase yield capacity by 40%</div>
                </div>
                <div className="rm-item">
                  <div className="rm-dot f" />
                  <div className="rm-text"><strong>Future — Market expansion</strong>Direct supply to Maputo wholesale markets</div>
                </div>
              </div>
            </div>
            <div className="fc-right">
              <div className="fc-stat-grid">
                <div className="fcs"><div className="fcs-n">10%</div><div className="fcs-l">Fixed return</div></div>
                <div className="fcs"><div className="fcs-n">3mo</div><div className="fcs-l">Duration</div></div>
                <div className="fcs"><div className="fcs-n">★5.0</div><div className="fcs-l">Rating</div></div>
                <div className="fcs"><div className="fcs-n">12</div><div className="fcs-l">Investors</div></div>
              </div>
              <div className="ai-b">
                <div className="al">Terra AI</div>
                <p> Joãohas a perfect track record. Short term, low risk. Invest 2,000 MZN today — receive 2,200 MZN by 15 August 2026.</p>
              </div>
              <button className="inv-b">Invest in João's farm ?</button>
            </div>
          </div>
        </section>

        <div className="cta">
          <h2>Africa is growing.<br /><em>Be part of it.</em></h2>
          <p>Join thousands of investors and farmers building Mozambique's agricultural future — together.</p>
          <div className="cta-btns">
            <button className="cta-p">Start investing today</button>
            <button className="cta-s">List my farm</button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default LandingPage
