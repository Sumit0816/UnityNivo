import React, { useState } from 'react';
import { MoreVertical, X, User, LogOut, ChevronDown } from 'lucide-react';
import './Navbar.css';

/**
 * Global Navigation Header Component - Matches Landing Page Reference Screenshot
 */
export default function Navbar({ onOpenAuth, user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Business Plan', href: '#business-plan' },
    { label: 'Income Plan', href: '#income-plan' },
    { label: 'Rank & Bonus', href: '#income-plan' },
    { label: 'Top Achievers', href: '#achievers' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Terms & Conditions', href: '#footer' },
  ];

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="nav-brand">
          <div className="brand-logo-hex">UN</div>
          <div className="brand-text">
            <span className="brand-name">UNITY NIVO</span>
            <span className="brand-sub">UNITED WE GROW</span>
          </div>
        </a>

        {/* Action / User Area */}
        <div className="nav-actions">
          {user ? (
            <div className="user-profile-wrapper">
              <button 
                className="user-profile-btn"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              >
                <div className="user-avatar-circle">
                  <User size={16} />
                </div>
                <span className="user-name">{user.name}</span>
                <ChevronDown size={14} />
              </button>

              {userDropdownOpen && (
                <div className="user-dropdown-menu">
                  <div className="dropdown-user-info">
                    <p className="info-name">{user.name}</p>
                    <p className="info-email">{user.email}</p>
                  </div>
                  <button className="dropdown-item logout" onClick={onLogout}>
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-btn-group">
              <button 
                className="btn-pill-outline"
                onClick={() => onOpenAuth('login')}
              >
                Login
              </button>
              <button 
                className="btn-pill-gold"
                onClick={() => onOpenAuth('register')}
              >
                Register
              </button>
            </div>
          )}

          {/* 3 Vertical Dots Menu Toggle */}
          <button 
            className="menu-toggle-dots"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? <X size={22} /> : <MoreVertical size={22} />}
          </button>
        </div>
      </div>

      {/* Dropdown Overlay Navigation Menu */}
      {menuOpen && (
        <div className="menu-popover-dropdown">
          <nav className="popover-nav-list">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="popover-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

