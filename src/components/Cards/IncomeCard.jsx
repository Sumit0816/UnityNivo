import React from 'react';
import './IncomeCard.css';

/**
 * Reusable Income Plan Card Component
 */
export default function IncomeCard({ title, highlight, badge, Icon, isLoggedIn }) {
  const displayHighlight = isLoggedIn ? highlight : (highlight ? 'Available after login' : '');

  return (
    <div className="income-card card-base">
      <div className="income-card-icon">
        {Icon && <Icon size={32} color="#ffb800" />}
      </div>
      <h3 className="income-card-title">{title}</h3>
      {displayHighlight && (
        <div className={`income-card-highlight ${!isLoggedIn ? 'logged-out-tag' : ''}`}>
          {displayHighlight}
        </div>
      )}
      {badge && <span className="income-card-badge">{badge}</span>}
    </div>
  );
}

