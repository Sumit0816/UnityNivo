import React from 'react';
import './WelcomeSection.css';

/**
 * Welcome Intro Section Component
 */
export default function WelcomeSection({ onRegister, onLogin }) {
  return (
    <section id="about" className="welcome-section">
      <div className="container">
        <div className="welcome-box card-base">
          <span className="welcome-label">WELCOME TO</span>
          <h2 className="welcome-title">UNITY NIVO</h2>
          <p className="welcome-desc">
            Build your network, participate in the platform's available programs and track your activities from one place.
          </p>
          <div className="welcome-actions">
            <button className="btn btn-gold" onClick={onRegister}>
              REGISTER NOW
            </button>
            <button className="btn btn-outline" onClick={onLogin}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
