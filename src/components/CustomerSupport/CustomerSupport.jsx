import React from 'react';
import { Headset } from 'lucide-react';
import './CustomerSupport.css';

/**
 * 24/7 Customer Support Banner Component
 */
export default function CustomerSupport({ onContactUs }) {
  return (
    <section id="contact" className="support-section">
      <div className="container">
        <div className="support-card card-base">
          <div className="support-info">
            <h2 className="support-title">24/7 CUSTOMER SUPPORT</h2>
            <p className="support-sub">We are here to help you anytime, anywhere.</p>
            <button className="btn btn-gold" onClick={onContactUs}>
              CONTACT US
            </button>
          </div>

          <div className="support-avatar">
            <div className="avatar-circle-icon">
              <Headset size={56} color="#ffb800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
