import React from 'react';
import './IncomeCard.css';

/**
 * Reusable Income Plan Card Component
 */
export default function IncomeCard({ title, highlight, badge, Icon }) {
  return (
    <div className="income-card card-base">
      <div className="income-card-icon">
        {Icon && <Icon size={32} color="#ffb800" />}
      </div>
      <h3 className="income-card-title">{title}</h3>
      {highlight && <div className="income-card-highlight">{highlight}</div>}
      {badge && <span className="income-card-badge">{badge}</span>}
    </div>
  );
}
