import React from 'react';
import './StepCard.css';

/**
 * Reusable How It Works Process Step Component
 */
export default function StepCard({ stepNumber, title, description, Icon }) {
  return (
    <div className="step-card card-base">
      <div className="step-header">
        <div className="step-icon-box">
          {Icon && <Icon size={24} color="#ffb800" />}
        </div>
        <span className="step-number">{stepNumber}</span>
      </div>
      <h3 className="step-title">{title}</h3>
      <p className="step-desc">{description}</p>
    </div>
  );
}
