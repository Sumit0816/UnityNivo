import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import './WalletSection.css';

/**
 * Wallet & Payment Methods Component
 */
export default function WalletSection() {
  const walletLogos = [
    { name: 'Trust Wallet', icon: '🛡️' },
    { name: 'MetaMask', icon: '🦊' },
    { name: 'SafePal', icon: '🔐' },
  ];

  return (
    <section id="services" className="wallet-section">
      <div className="container">
        <div className="section-title">
          <h2>WALLET & <span>PAYMENT</span></h2>
          <p>We support trusted & secure wallets</p>
        </div>

        {/* Supported Wallets Row */}
        <div className="wallets-row">
          {walletLogos.map((w) => (
            <div key={w.name} className="wallet-badge card-base">
              <span className="wallet-icon">{w.icon}</span>
              <span className="wallet-name">{w.name}</span>
            </div>
          ))}
        </div>

        {/* Rules Grid */}
        <div className="grid-2 wallet-info-grid">
          <div className="wallet-card card-base">
            <div className="wallet-card-header text-deposit">
              <ArrowDownRight size={22} />
              <h3>DEPOSIT</h3>
            </div>
            <div className="wallet-card-content">
              <p>Minimum <strong>$30</strong></p>
              <p className="highlight-tag">USDT – BEP-20 Only</p>
            </div>
          </div>

          <div className="wallet-card card-base">
            <div className="wallet-card-header text-withdrawal">
              <ArrowUpRight size={22} />
              <h3>WITHDRAWAL</h3>
            </div>
            <div className="wallet-card-content">
              <p>Minimum <strong>$15</strong> | <strong>5%</strong> Charge</p>
              <p className="highlight-tag">Mon – Fri | Within 24 Hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
