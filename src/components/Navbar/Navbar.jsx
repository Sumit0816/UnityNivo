import React, { useState } from 'react';
import { Menu, X, User, LogOut, ChevronDown, Calculator, Code } from 'lucide-react';
import './Navbar.css';

/**
 * Global Navigation Header Component
 */
export default function Navbar({ onOpenAuth, user, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Income Plan', href: '#income-plan' },
    { label: 'Rank & Bonus', href: '#business-plan' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Dev Reference', href: '#dev-reference' },
    { label: 'Wallet', href: '#services' },
    { label: 'Achievers', href: '#achievers' },
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

        {/* Desktop Navigation Links */}
        <nav className="nav-menu">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action / User Area */}
        <div className="nav-actions">
          {user ? (
            <div className="user-profile-wrapper">
              <button 
                className="user-profile-btn"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              >
                <div className="user-avatar-circle">
                  <User size={18} />
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
                className="btn btn-outline nav-auth-btn"
                onClick={() => onOpenAuth('login')}
              >
                Login
              </button>
              <button 
                className="btn btn-gold nav-auth-btn"
                onClick={() => onOpenAuth('register')}
              >
                Register
              </button>
            </div>
          )}

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          {!user && (
            <div className="mobile-auth-buttons">
              <button 
                className="btn btn-outline"
                onClick={() => { onOpenAuth('login'); setMobileMenuOpen(false); }}
              >
                Login
              </button>
              <button 
                className="btn btn-gold"
                onClick={() => { onOpenAuth('register'); setMobileMenuOpen(false); }}
              >
                Register
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
