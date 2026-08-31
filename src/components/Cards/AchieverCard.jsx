import React from 'react';
import './AchieverCard.css';

/**
 * Top Achievers Leaderboard Card Component
 */
export default function AchieverCard({ name, rank, business, avatarUrl, isLoggedIn }) {
  const rankClass = rank.toLowerCase();

  return (
    <div className="achiever-card card-base">
      <div className="achiever-avatar-container">
        <img src={avatarUrl} alt={name} className="achiever-avatar" />
      </div>
      <h3 className="achiever-name">{name}</h3>
      <span className={`rank-text-badge ${rankClass}`}>{rank}</span>
      <div className="achiever-stats">
        <span className="stats-label">Business</span>
        <span className="stats-value">{isLoggedIn ? business : 'Top Leader'}</span>
      </div>
    </div>
  );
}


