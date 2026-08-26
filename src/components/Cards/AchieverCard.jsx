import React from 'react';
import './AchieverCard.css';

/**
 * Reusable Top Achievers Leaderboard Card Component
 */
export default function AchieverCard({ name, rank, business, avatarUrl }) {
  const rankClass = rank.toLowerCase();

  return (
    <div className="achiever-card card-base">
      <div className="achiever-avatar-container">
        <img src={avatarUrl} alt={name} className="achiever-avatar" />
        <span className={`rank-badge ${rankClass}`}>{rank}</span>
      </div>
      <h3 className="achiever-name">{name}</h3>
      <div className="achiever-stats">
        <span className="stats-label">Business</span>
        <span className="stats-value">{business}</span>
      </div>
    </div>
  );
}
