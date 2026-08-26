import React, { useState } from 'react';
import { X, Mail, Lock, User, Phone, CheckCircle } from 'lucide-react';
import './AuthModal.css';

/**
 * Authentication Modal for Login & Registration
 * Supports switching tabs and instant dummy credential filling.
 */
export default function AuthModal({ isOpen, initialMode = 'login', onClose, onLoginSuccess }) {
  const [mode, setMode] = useState(initialMode); // 'login' or 'register'
  
  // Form fields state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  if (!isOpen) return null;

  // Pre-fill dummy credentials for quick testing
  const handleFillDemo = () => {
    if (mode === 'login') {
      setFormData({
        fullName: 'Demo User',
        email: 'demo@unitynivo.com',
        phone: '+1 234 567 8900',
        password: 'password123',
        confirmPassword: 'password123'
      });
    } else {
      setFormData({
        fullName: 'John Smith',
        email: 'john.smith@example.com',
        phone: '+1 987 654 3210',
        password: 'password123',
        confirmPassword: 'password123'
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful auth action with dummy credentials
    const userPayload = {
      name: formData.fullName || (mode === 'login' ? 'Demo User' : 'New Member'),
      email: formData.email || 'user@unitynivo.com',
      token: 'dummy-jwt-token-12345'
    };
    
    onLoginSuccess(userPayload, mode === 'login' ? 'Logged in successfully!' : 'Account registered successfully!');
    onClose();
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="auth-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={20} />
        </button>

        {/* Modal Header & Tabs */}
        <div className="auth-header">
          <div className="auth-logo">
            <span className="logo-hex">UN</span>
            <span className="logo-text">UNITY NIVO</span>
          </div>
          <p className="auth-subtext">UNITED WE GROW</p>

          <div className="auth-tabs">
            <button 
              className={`auth-tab ${mode === 'login' ? 'active' : ''}`}
              onClick={() => setMode('login')}
            >
              Login
            </button>
            <button 
              className={`auth-tab ${mode === 'register' ? 'active' : ''}`}
              onClick={() => setMode('register')}
            >
              Register
            </button>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="auth-form">
          {mode === 'register' && (
            <div className="input-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <User size={18} className="input-icon" />
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="Enter your full name" 
                  value={formData.fullName}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
          )}

          <div className="input-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <Mail size={18} className="input-icon" />
              <input 
                type="email" 
                name="email"
                placeholder="name@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          {mode === 'register' && (
            <div className="input-group">
              <label>Phone Number</label>
              <div className="input-wrapper">
                <Phone size={18} className="input-icon" />
                <input 
                  type="text" 
                  name="phone"
                  placeholder="Enter phone number" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock size={18} className="input-icon" />
              <input 
                type="password" 
                name="password"
                placeholder="••••••••" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          {/* Quick Demo Credentials Autofill Helper */}
          <div className="demo-credentials-box">
            <span>Need dummy credentials for testing?</span>
            <button type="button" className="btn-demo-fill" onClick={handleFillDemo}>
              <CheckCircle size={14} /> Auto-fill Demo Credentials
            </button>
          </div>

          <button type="submit" className="btn btn-gold auth-submit-btn">
            {mode === 'login' ? 'Login To Dashboard' : 'Create Free Account'}
          </button>
        </form>
      </div>
    </div>
  );
}
