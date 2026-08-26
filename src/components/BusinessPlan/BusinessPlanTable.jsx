import React, { useState } from 'react';
import { Award, Crown, Info, ShieldCheck, TrendingUp, Zap, Gift, Users, AlertCircle, ChevronRight } from 'lucide-react';
import './BusinessPlanTable.css';

/**
 * Business Plan Table & Rank Structure Component
 * Implements Section 1, 2, 3, and 4 with premium animations & mobile responsiveness
 */
export default function BusinessPlanTable() {
  const [activeTab, setActiveTab] = useState('ranks'); // 'ranks' | 'leadership' | 'terms' | 'rules'

  // Section 3: Rank / Achievement Bonus Data
  const rankBonusData = [
    { rank: 'Bronze', badgeColor: '#CD7F32', self: '$200', team: '$500', bonus: '$250', requirement: 'Direct $200 self & $500 team volume' },
    { rank: 'Silver', badgeColor: '#C0C0C0', self: '$300', team: '$1,500', bonus: '$500', requirement: 'Direct $300 self & $1,500 team volume' },
    { rank: 'Gold', badgeColor: '#FFD700', self: '$1,000', team: '$35,000', bonus: '$1,500', requirement: 'Direct $1,000 self & $35,000 team volume' },
    { rank: 'Platinum', badgeColor: '#E5E4E2', self: '$2,000', team: '$50,000 + 2 Gold', bonus: '$7,000', requirement: '$50k team business + 2 Gold rank leaders' },
    { rank: 'Diamond', badgeColor: '#B9F2FF', self: '$5,000', team: '$100,000 + 2 Platinum', bonus: '$30,000', requirement: '$100k team business + 2 Platinum rank leaders' },
    { rank: 'Emerald', badgeColor: '#50C878', self: '$10,000', team: '2 Diamond', bonus: '$1,000,000', requirement: '2 Diamond rank leaders in structure' },
  ];

  // Section 4: Leadership Monthly Bonus Data
  const leadershipBonusData = [
    { rank: 'Bronze', badgeColor: '#CD7F32', monthlyBusiness: '$2,000', monthlyBonus: '$150', description: 'Maintain $2,000 monthly business volume' },
    { rank: 'Silver', badgeColor: '#C0C0C0', monthlyBusiness: '$5,000', monthlyBonus: '$200', description: 'Maintain $5,000 monthly business volume' },
    { rank: 'Gold', badgeColor: '#FFD700', monthlyBusiness: '$15,000', monthlyBonus: '$500', description: 'Maintain $15,000 monthly business volume' },
    { rank: 'Platinum', badgeColor: '#E5E4E2', monthlyBusiness: '$50,000', monthlyBonus: '$2,000', description: 'Maintain $50,000 monthly business volume' },
    { rank: 'Diamond', badgeColor: '#B9F2FF', monthlyBusiness: '$1,000,000', monthlyBonus: '$5,000', description: 'Maintain $1,000,000 monthly business volume' },
    { rank: 'Emerald', badgeColor: '#50C878', monthlyBusiness: '$20,000,000', monthlyBonus: '$50,000', description: 'Maintain $20,000,000 monthly business volume' },
  ];

  // General Plan Terms
  const generalTerms = [
    { label: 'Minimum Deposit', value: '$30', notes: 'One-time or cumulative minimum' },
    { label: 'Deposit Currency', value: 'USDT (BEP-20)', notes: 'Binance Smart Chain' },
    { label: 'Minimum Withdrawal', value: '$15', notes: 'Wallet threshold' },
    { label: 'Withdrawal Charge', value: '5%', notes: 'Standard transaction fee' },
    { label: 'Withdrawal Days', value: 'Monday – Friday', notes: 'Business days only' },
    { label: 'Withdrawal Processing', value: 'Within 24 Hours', notes: 'Automated processing' },
  ];

  // Income Stream Logic Details
  const incomeCategoryDetails = [
    {
      id: '1',
      title: 'Join Bonus',
      rate: '$1',
      icon: Gift,
      rule: 'Eligible new registration & account activation',
      devLogic: 'Credited once upon eligible user registration + initial account activation condition.'
    },
    {
      id: '2',
      title: 'ROI Income',
      rate: '0.5% / Day',
      icon: TrendingUp,
      rule: 'Daily yield on active eligible investment principal',
      devLogic: 'Calculated daily as principal × 0.5%. E.g., $1,000 active investment yields $5/day ($75 over 15 days).'
    },
    {
      id: '3',
      title: 'Referral Income',
      rate: '15%',
      icon: Users,
      rule: '15% direct commission on direct referral investment',
      devLogic: 'Triggered instantly on direct referral deposits. E.g., $1,000 referral business yields $150 direct bonus.'
    },
    {
      id: '4',
      title: 'Booster Income',
      rate: '15%',
      icon: Zap,
      rule: 'Activation within 15 days + minimum $300 investment',
      devLogic: '15-day countdown timer initiated upon Activity ID creation. Requires >= $300 deposit within window.'
    },
    {
      id: '5',
      title: 'Rank / Achievement Bonus',
      rate: 'Up to $1,000,000',
      icon: Award,
      rule: 'Based on Self Business & Team Structure qualification',
      devLogic: 'Evaluates lifetime Self Business ($200 to $10,000) and Team Business + required rank downlines (Bronze to Emerald).'
    },
    {
      id: '6',
      title: 'Leadership Monthly Bonus',
      rate: 'Up to $50,000 / mo',
      icon: Crown,
      rule: 'Based on monthly active team business target per rank',
      devLogic: 'Monthly evaluation window. Requires maintaining rank + target monthly volume ($2,000 to $20,000,000).'
    }
  ];

  return (
    <section id="business-plan" className="business-plan-section">
      <div className="container">
        <div className="section-title">
          <h2>COMPLETE BUSINESS & <span>INCOME PLAN</span></h2>
          <p>Transparent Rank Structure, Leadership Rewards & Platform Specifications</p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="plan-tabs-bar">
          <button 
            className={`plan-tab-btn ${activeTab === 'ranks' ? 'active' : ''}`}
            onClick={() => setActiveTab('ranks')}
          >
            <Award size={18} />
            <span>Rank Achievement Bonus</span>
          </button>
          <button 
            className={`plan-tab-btn ${activeTab === 'leadership' ? 'active' : ''}`}
            onClick={() => setActiveTab('leadership')}
          >
            <Crown size={18} />
            <span>Leadership Monthly Bonus</span>
          </button>
          <button 
            className={`plan-tab-btn ${activeTab === 'rules' ? 'active' : ''}`}
            onClick={() => setActiveTab('rules')}
          >
            <Zap size={18} />
            <span>6 Income Rules</span>
          </button>
          <button 
            className={`plan-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
            onClick={() => setActiveTab('terms')}
          >
            <ShieldCheck size={18} />
            <span>Account Terms</span>
          </button>
        </div>

        {/* TAB 1: RANK / ACHIEVEMENT BONUS */}
        {activeTab === 'ranks' && (
          <div className="plan-tab-content fade-in">
            <div className="table-header-info card-base">
              <div className="info-badge-row">
                <span className="badge-pill gold"><Award size={14} /> Section 3 Reference</span>
                <span className="info-text">Rank qualification is based on required <strong>Self Business</strong> and <strong>Team Business</strong> criteria.</span>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="table-responsive-wrapper card-base desktop-table-only">
              <table className="business-data-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Self Business</th>
                    <th>Team Business Criteria</th>
                    <th>Achievement Bonus</th>
                    <th>Qualification Summary</th>
                  </tr>
                </thead>
                <tbody>
                  {rankBonusData.map((item, idx) => (
                    <tr key={idx} className="rank-row">
                      <td className="rank-name-cell">
                        <span className="rank-pill-badge" style={{ borderColor: item.badgeColor, color: item.badgeColor }}>
                          {item.rank}
                        </span>
                      </td>
                      <td className="amount-cell">{item.self}</td>
                      <td className="highlight-cell">{item.team}</td>
                      <td className="bonus-cell">
                        <span className="bonus-value-highlight">{item.bonus}</span>
                      </td>
                      <td className="desc-cell">{item.requirement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Cards for Super Responsive Layout */}
            <div className="mobile-cards-list">
              {rankBonusData.map((item, idx) => (
                <div key={idx} className="mobile-rank-card card-base">
                  <div className="m-card-top">
                    <span className="rank-pill-badge" style={{ borderColor: item.badgeColor, color: item.badgeColor }}>
                      {item.rank}
                    </span>
                    <span className="bonus-value-highlight">{item.bonus}</span>
                  </div>
                  <div className="m-card-body">
                    <div className="m-row">
                      <span>Self Business:</span>
                      <strong>{item.self}</strong>
                    </div>
                    <div className="m-row">
                      <span>Team Business:</span>
                      <strong style={{ color: '#60a5fa' }}>{item.team}</strong>
                    </div>
                    <p className="m-req">{item.requirement}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="plan-note-box card-base">
              <AlertCircle size={18} className="note-icon" />
              <p>
                <strong>Developer Note:</strong> Rank conditions require satisfying both Self Business and Team Business thresholds. Team Leader conditions (e.g. 2 Gold for Platinum, 2 Platinum for Diamond, 2 Diamond for Emerald) require verified downline rank achievements.
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: LEADERSHIP MONTHLY BONUS */}
        {activeTab === 'leadership' && (
          <div className="plan-tab-content fade-in">
            <div className="table-header-info card-base">
              <div className="info-badge-row">
                <span className="badge-pill crown"><Crown size={14} /> Section 4 Reference</span>
                <span className="info-text">Rewards qualifying <strong>Monthly Business</strong> performance at each achieved rank.</span>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="table-responsive-wrapper card-base desktop-table-only">
              <table className="business-data-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Required Monthly Business</th>
                    <th>Leadership Monthly Bonus</th>
                    <th>Qualification Target</th>
                  </tr>
                </thead>
                <tbody>
                  {leadershipBonusData.map((item, idx) => (
                    <tr key={idx} className="rank-row">
                      <td className="rank-name-cell">
                        <span className="rank-pill-badge" style={{ borderColor: item.badgeColor, color: item.badgeColor }}>
                          {item.rank}
                        </span>
                      </td>
                      <td className="amount-cell">{item.monthlyBusiness}</td>
                      <td className="bonus-cell">
                        <span className="leadership-bonus-highlight">{item.monthlyBonus} <small>/ month</small></span>
                      </td>
                      <td className="desc-cell">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Cards */}
            <div className="mobile-cards-list">
              {leadershipBonusData.map((item, idx) => (
                <div key={idx} className="mobile-rank-card card-base">
                  <div className="m-card-top">
                    <span className="rank-pill-badge" style={{ borderColor: item.badgeColor, color: item.badgeColor }}>
                      {item.rank}
                    </span>
                    <span className="leadership-bonus-highlight">{item.monthlyBonus} <small>/mo</small></span>
                  </div>
                  <div className="m-card-body">
                    <div className="m-row">
                      <span>Monthly Target:</span>
                      <strong>{item.monthlyBusiness}</strong>
                    </div>
                    <p className="m-req">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="plan-note-box card-base">
              <Info size={18} className="note-icon" />
              <p>
                <strong>Example Payout:</strong> If qualifying monthly team business reaches $15,000 and applicable Gold rank conditions are satisfied, the member earns a $500 monthly leadership reward.
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: 6 DETAILED INCOME RULES */}
        {activeTab === 'rules' && (
          <div className="plan-tab-content fade-in">
            <div className="income-grid-details">
              {incomeCategoryDetails.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <div key={cat.id} className="income-rule-card card-base">
                    <div className="income-rule-header">
                      <div className="income-rule-icon">
                        <IconComponent size={22} color="#ffb800" />
                      </div>
                      <div className="income-rule-title-box">
                        <span className="income-cat-number">0{cat.id}</span>
                        <h3>{cat.title}</h3>
                      </div>
                      <span className="income-rate-tag">{cat.rate}</span>
                    </div>

                    <div className="income-rule-body">
                      <p className="rule-desc"><strong>Core Rule:</strong> {cat.rule}</p>
                      <div className="dev-logic-snippet">
                        <span className="snippet-title">Developer Logic:</span>
                        <p>{cat.devLogic}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: ACCOUNT TERMS */}
        {activeTab === 'terms' && (
          <div className="plan-tab-content fade-in">
            <div className="terms-wrapper card-base">
              <div className="terms-header">
                <ShieldCheck size={28} color="#ffb800" />
                <div>
                  <h3>Platform Account & Transaction Rules</h3>
                  <p>Standard wallet operation parameters</p>
                </div>
              </div>

              <table className="business-table">
                <tbody>
                  {generalTerms.map((item, index) => (
                    <tr key={index}>
                      <td className="table-label">
                        <strong>{item.label}</strong>
                      </td>
                      <td className="table-value">
                        <span className="value-highlight">{item.value}</span>
                      </td>
                      <td className="table-notes">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
