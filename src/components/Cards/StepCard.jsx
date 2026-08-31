import React from 'react';
import './StepCard.css';

/**
 * How It Works Process Step Component matching screenshot 2
 */
export default function StepCard({ stepNumber, title, description, Icon }) {
  return (
    <div className="step-card card-base">
      <div className="step-icon-circle">
        {Icon && <Icon size={22} color="#ffffff" />}
      </div>
      <span className="step-number-text">{stepNumber}</span>
      <h3 className="step-title">{title}</h3>
      <p className="step-desc">{description}</p>
    </div>
  );
}

