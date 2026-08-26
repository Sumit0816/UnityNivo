import React from 'react';
import { TrendingUp, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import './HeroSection.css';

/**
 * Hero Banner Component - Premium Animated Hero Section
 */
export default function HeroSection({ onJoinNow }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-glow"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge-top">
            <span className="live-dot"></span>
            <span>NEXT-GEN NETWORKING PLATFORM</span>
          </div>

          <h1 className="hero-title">
            DREAM BIG <br />
            <span className="title-gradient">TRAVEL MORE</span>
          </h1>

          <p className="hero-subtitle">
            Empowering your financial freedom with <strong>UNITY NIVO</strong>'s 
            transparent daily ROI & leadership rewards.
          </p>

          <div className="hero-cta">
            <button className="btn btn-gold hero-btn" onClick={onJoinNow}>
              <span>JOIN NOW & START EARNING</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Quick Stats Banner */}
          <div className="hero-stats-row">
            <div className="stat-pill">
              <TrendingUp size={16} color="#ffb800" />
              <span>0.5% Daily ROI</span>
            </div>
            <div className="stat-pill">
              <Award size={16} color="#38bdf8" />
              <span>Up to $1M Rank Bonus</span>
            </div>
            <div className="stat-pill">
              <ShieldCheck size={16} color="#4ade80" />
              <span>USDT (BEP-20)</span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-image-frame">
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" 
              alt="Luxury Beach Resort - Dream Big Travel More" 
              className="hero-img"
            />
            <div className="hero-overlay-badge floating-badge-1">
              <span>✈️ EXPLORE THE WORLD</span>
            </div>
            <div className="hero-overlay-badge floating-badge-2">
              <span className="gold-sparkle">★</span>
              <span>15% Booster Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
