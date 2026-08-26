import React from 'react';
import './AboutSection.css';

/**
 * About Unity Nivo Corporate Section Component
 */
export default function AboutSection({ onReadMore }) {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-card card-base">
          <div className="about-content">
            <h2 className="about-title">
              ABOUT <span>UNITY NIVO</span>
            </h2>
            <p className="about-text">
              Unity Nivo is a global platform designed to bring people together, create opportunities and help you achieve financial growth through our proven programs.
            </p>
            <button className="btn btn-gold" onClick={onReadMore}>
              READ MORE
            </button>
          </div>

          <div className="about-media">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" 
              alt="Unity Nivo Corporate Building" 
              className="about-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
