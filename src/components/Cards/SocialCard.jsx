import React from 'react';
import './SocialCard.css';

/**
 * Reusable Social Media Join Bonus Card Component
 */
export default function SocialCard({ platform, amount, iconColor, bgGlow, Icon, link }) {
  return (
    <a href={link || "#"} className="social-card card-base">
      <div 
        className="social-icon-wrapper" 
        style={{ 
          backgroundColor: bgGlow || 'rgba(255, 255, 255, 0.05)',
          color: iconColor || '#fff'
        }}
      >
        {Icon && <Icon size={28} />}
      </div>
      <h4 className="social-title">{platform}</h4>
      <div className="social-amount">{amount}</div>
    </a>
  );
}
