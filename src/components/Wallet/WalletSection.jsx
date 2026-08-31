import React from 'react';
import { Shield, Wallet } from 'lucide-react';
import './WalletSection.css';

/**
 * Wallet & Payment Methods Component matching screenshot 2
 */
export default function WalletSection({ isLoggedIn }) {
  return (
    <section id="services" className="wallet-section">
      <div className="container">
        <div className="section-title">
          <h2>WALLET & <span>PAYMENT</span></h2>
          <p>We support trusted & secure wallets</p>
        </div>

        {/* Supported Wallets Row */}
        <div className="wallets-row">
          <div className="wallet-badge card-base">
            <span className="wallet-logo-icon trust-wallet"><Shield size={20} /></span>
            <span className="wallet-name">Trust Wallet</span>
          </div>

          <div className="wallet-badge card-base">
            <span className="wallet-logo-icon metamask">🦊</span>
            <span className="wallet-name">MetaMask</span>
          </div>

          <div className="wallet-badge card-base">
            <span className="wallet-logo-icon safepal"><Wallet size={20} /></span>
            <span className="wallet-name">SafePal</span>
          </div>
        </div>

        {/* Info Grid Boxes */}
        <div className="grid-2 wallet-info-grid">
          <div className="wallet-box card-base">
            <h3 className="wallet-box-title deposit-title">DEPOSIT</h3>
            <p className="wallet-main-text">{isLoggedIn ? 'Minimum $30' : 'Instant Deposit'}</p>
            <p className="wallet-sub-text">USDT – BEP-20 Only</p>
          </div>

          <div className="wallet-box card-base">
            <h3 className="wallet-box-title withdrawal-title">WITHDRAWAL</h3>
            <p className="wallet-main-text">
              {isLoggedIn ? 'Minimum $15 | 5% Charge' : 'Fast Withdrawal'}
            </p>
            <p className="wallet-sub-text">Mon – Fri <span className="divider">|</span> Within 24 Hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}


