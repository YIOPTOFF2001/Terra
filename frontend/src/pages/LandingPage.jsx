import React from 'react'
import Footer from '../components/Footer'
import '../styles/Landing.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/Login.css';

function LandingPage() {
  const [activeTab, setActiveTab] = useState('farmers')
  return (
    <>

      <div className="t">
        <nav className="nav">
          <div className="logo">TER<span>RA</span></div>
          <ul className="nav-links">
            <li><a href="#">How it works</a></li>
            <li><a href="#">Farmers</a></li>
            <li><a href="#">Vendors</a></li>
          </ul>
          <Link to="/get-started">
          <button className="nav-cta">Get started</button>
          </Link>
        </nav>

        <div className="hero">
          <div className="hero-left">
            <div className="hero-badge">🌍  Mozambique • Est. 2026</div>
            <h1>Farm fresh.<br /><em>Direct to Maputo.</em></h1>
            <p>Terra sources directly from verified Mozambican farmers, quality checks every batch, and delivers fresh produce to vendors across Maputo. Reliable supply. Fair prices. No middlemen.</p>
            <div className="hero-btns">
              <button className="btn-p">I am a vendor</button>
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
                  <div className="farmer-name">Tomatoes at Terra 🍅🍅</div>
                  <div className="farmer-loc">Sourced from Gaza province</div>
                </div>
                <div className="vcbadge">VERIFIED</div>
              </div>
              <div className="crop-tag">🍅 Tomatoes • 800 kg available</div>
              <div className="mini-stats">
                <div className="ms"><div className="ms-n">800kg</div><div className="ms-l">Available Stock</div></div>
                <div className="ms"><div className="ms-n">45MZN</div><div className="ms-l">Per kilogram</div></div>
                <div className="ms"><div className="ms-n">★ 5.0</div><div className="ms-l">A Grade Quality</div></div>
              </div>
              <div className="prog-label"><span>Tomatoes left</span><span>800kg / 1200kg</span></div>
              <div className="prog"><div className="prog-fill" /></div>
              <button className="invest-b">Order from Terra </button>
            </div>
            <div className="hero-quote">
              <p>The region’s hot climate and fertile soils produce exceptionally rich, deeply flavored tomatoes that locals swear are sweeter and juicier than most. In fact, during peak season, markets overflow with bright red harvests, and tomato farming becomes one of the province’s most recognizable agricultural strengths </p>
              <span>— Did you know?</span>
            </div>
          </div>
        </div>

        <br></br>

        <div className="stats">
          <div className="stat"><div className="stat-n">847</div><div className="stat-l">Farmers we source from</div></div>
          <div className="stat"><div className="stat-n">48hr</div><div className="stat-l">Delivery time to your door</div></div>
          <div className="stat"><div className="stat-n">100% </div><div className="stat-l">Quality checks by Terra</div></div>
        </div>


         
          {/* How it works section*/}
          <section className="sec">
          <div className="sec-tag">How it works</div>

          <h2>Simple. Transparent.<br /><em style={{color: '#2A5C22'}}>Built for Africa.</em></h2>
          <p>Terra sits between farmers and vendors — sourcing directly, quality checking every batch, and delivering reliably across Maputo</p>

           <div className="audience-tabs">
            <button className={`aud-tab ${activeTab === 'farmers' ? 'active' : ''}`} onClick={() => setActiveTab('farmers')}>For farmers</button>
            <button className={`aud-tab ${activeTab === 'vendors' ? 'active' : ''}`} onClick={() => setActiveTab('vendors')}>For vendors</button>
          </div>


          {activeTab === 'farmers' && (
    <div className="how">
      <div className="hc">
        <div className="hc-top">
          <div className="hc-n">01</div>
          <span className="hc-mini-tag">Getting started</span>
        </div>
        <h3>Register</h3>
        <p>Join Terra's verified farmer network. We assess your farm and onboard you before your first listing goes live.</p>
      </div>
      <div className="hc">
        <div className="hc-top">
          <div className="hc-n">02</div>
          <span className="hc-mini-tag">Your harvest</span>
        </div>
        <h3>List your produce</h3>
        <p>Tell us what you're harvesting and when. Terra reviews your listing and places a confirmed purchase order.</p>
      </div>
      <div className="hc">
        <div className="hc-top">
          <div className="hc-n">03</div>
          <span className="hc-mini-tag">You earn</span>
        </div>
        <h3>Get paid</h3>
        <p>Terra collects your produce directly from the farm and pays you within 24 hours — no waiting, no brokers.</p>
      </div>
    </div>
  )}

          {activeTab === 'vendors' && (
    <div className="how">
      <div className="hc">
        <div className="hc-top">
          <div className="hc-n">01</div>
          <span className="hc-mini-tag">Explore</span>
        </div>
        <h3>Browse Terra's catalogue</h3>
        <p>Browse our weekly produce catalogue — quality checked by Terra. Filter by crop type, quantity, and price.</p>
      </div>
      <div className="hc">
        <div className="hc-top">

       


          <div className="hc-n">02</div>
          <span className="hc-mini-tag">Place order</span>
        </div>
        <h3>Order from Terra</h3>
        <p>Place your order through the app. Terra handles all sourcing, quality control, and logistics end to end.</p>
      </div>
      <div className="hc">
        <div className="hc-top">
          <div className="hc-n">03</div>
          <span className="hc-mini-tag">Fresh delivery</span>
        </div>
        <h3>Receive fresh produce</h3>
        <p>Fresh, quality-checked produce delivered to your location within 48 hours. Pay on delivery.</p>
      </div>
    </div>
  )}
</section>

        
  
           


        <section className="sec">
          <div className="sec-tag">This week's produce</div>
          <h2>Fresh tomatoes<br/><em>Ready now!</em></h2>
          <p>Terra has sourced 1200kg of grade A tomatoes from Gaza Province. Quality checked and ready for delivery across Maputo.</p>
          <div className="fc">
            <div className="fc-left">
              <h3>Expected produce</h3>
              <div className="sub">Gaza Province • 2 years in business • 2 completed cycles</div>
              <div className="fc-tags">
                <div className="fc-tag">Tomatoes</div>
                <div className="fc-tag">Grade A</div>
                <div className="fc-tag">800kg</div>
                <div className="fc-tag n">Next harvest</div>
              </div>
              <div className="roadmap">
                <h4>CURRENT PRODUCE:</h4>
                <div className="rm-item">
                  <div className="rm-dot" />
                  <div className="rm-text"><strong>Current — Tomato Season 3</strong>800kg available, harvested last week</div>
                </div>
                <div className="rm-item">
                  <div className="rm-dot f" />
                  <div className="rm-text"><strong>Next — Maize Harvest</strong>Expected in June 2026</div>
                </div>
                <div className="rm-item">
                  <div className="rm-dot f" />
                  <div className="rm-text"><strong>Future — Market expansion</strong>Direct supply to Maputo wholesale markets</div>
                </div>
              </div>
            </div>
            <div className="fc-right">
              <div className="fc-stat-grid">
                <div className="fcs"><div className="fcs-n">800kg</div><div className="fcs-l">Available now</div></div>
                <div className="fcs"><div className="fcs-n">48hr</div><div className="fcs-l">Delivery</div></div>
                <div className="fcs"><div className="fcs-n">★5.0</div><div className="fcs-l">Grade A</div></div>
                <div className="fcs"><div className="fcs-n">45MZN</div><div className="fcs-l">per/kg</div></div>
              </div>
              <div className="ai-b">
                <div className="al">Terra AI</div>
                <p> Based on your order history, Terra AI recommends stocking up on tomatoes and leafy greens this week. Demand is high, supply is fresh, and prices are stable.</p>
              </div>
              <button className="inv-b">Order from Terra</button>
            </div>
          </div>
        </section>

        <div className="cta">
          <h2>Africa is growing.<br /><em>Be part of it.</em></h2>
          <p>Whether you grow it or sell it — Terra is your reliable partner in Mozambique's food supply chain.</p>
          <div className="cta-btns">
            <button className="cta-p">I am a vendor</button>
            <button className="cta-s">I am a farmer</button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default LandingPage
