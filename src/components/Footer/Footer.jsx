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
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-circle-btn facebook" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-circle-btn instagram" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-circle-btn youtube" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://telegram.org" target="_blank" rel="noreferrer" className="social-circle-btn telegram" aria-label="Telegram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.761-.17.712-.433.951-.687.974-.559.052-.984-.369-1.526-.724-.848-.556-1.327-.902-2.15-1.444-.951-.627-.335-.971.208-1.535.142-.147 2.613-2.396 2.661-2.601.006-.025.011-.12-.044-.169s-.136-.032-.195-.019c-.083.019-1.408.896-3.974 2.628-.376.259-.717.386-1.022.379-.338-.008-.988-.191-1.472-.349-.593-.193-1.064-.296-1.023-.625.021-.171.257-.346.708-.525 2.784-1.212 4.641-2.012 5.571-2.399 2.648-1.104 3.198-1.296 3.557-1.302.079-.001.256.018.371.112.097.079.124.186.136.262.01.072.022.241.012.373z"/></svg>
            </a>
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
