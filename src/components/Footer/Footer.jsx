import React from 'react';
import { MessageSquare } from 'lucide-react';
import './Footer.css';

/**
 * Global Website Footer & Floating WhatsApp Widget
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Header */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-hex">UN</div>
            <div className="footer-brand-text">
              <span className="brand-name">UNITY NIVO</span>
              <span className="brand-sub">UNITED WE GROW</span>
            </div>
          </div>

          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn facebook" aria-label="Facebook">f</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn instagram" aria-label="Instagram">📷</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-btn youtube" aria-label="YouTube">▶</a>
            <a href="https://telegram.org" target="_blank" rel="noreferrer" className="social-btn telegram" aria-label="Telegram">✈</a>
          </div>
        </div>

        {/* Multi-column Navigation Links */}
        <div className="footer-links-grid">
          <div className="footer-col">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#business-plan">Business Plan</a></li>
              <li><a href="#income-plan">Income Plan</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>SUPPORT</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>OTHER</h4>
            <ul>
              <li><a href="#achievers">Top Achievers</a></li>
              <li><a href="#rank-bonus">Rank & Bonus</a></li>
              <li><a href="#news">News & Updates</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Unity Nivo. All Rights Reserved.</p>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noreferrer" 
        className="whatsapp-float"
        title="Chat on WhatsApp"
      >
        <MessageSquare size={24} />
      </a>
    </footer>
  );
}
