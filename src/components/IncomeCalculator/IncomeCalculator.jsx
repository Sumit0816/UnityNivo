import React, { useState } from 'react';
import { Calculator, DollarSign, Award, Crown, TrendingUp, Zap, Users, Gift, CheckCircle2, ArrowRight, RefreshCw } from 'lucide-react';
import './IncomeCalculator.css';

/**
 * Interactive Income Calculator & Rank Simulator Component
 * Implements real-time calculations for all 6 income categories in Unity Nivo
 */
export default function IncomeCalculator() {
  // Inputs
  const [selfInvestment, setSelfInvestment] = useState(1000);
  const [directBusiness, setDirectBusiness] = useState(2000);
  const [teamBusiness, setTeamBusiness] = useState(35000);
  const [monthlyBusiness, setMonthlyBusiness] = useState(15000);
  const [activationDays, setActivationDays] = useState(5);
  const [goldLeaders, setGoldLeaders] = useState(0);
  const [platinumLeaders, setPlatinumLeaders] = useState(0);
  const [diamondLeaders, setDiamondLeaders] = useState(0);

  // 1. Join Bonus ($1 fixed upon activation)
  const joinBonus = selfInvestment >= 30 ? 1 : 0;

  // 2. Daily ROI (0.5% / day)
  const dailyRoi = selfInvestment * 0.005;
  const monthlyRoi = dailyRoi * 30;
  const fifteenDayRoi = dailyRoi * 15;

  // 3. Direct Referral Income (15%)
  const referralIncome = directBusiness * 0.15;

  // 4. Booster Income (15% if activated within 15 days with min $300)
  const isBoosterEligible = activationDays <= 15 && selfInvestment >= 300;
  const boosterIncome = isBoosterEligible ? selfInvestment * 0.15 : 0;

  // 5. Rank Achievement Bonus Logic
  let achievedRank = 'None';
  let rankBonus = 0;
  let rankBadgeColor = '#64748b';

  if (selfInvestment >= 10000 && diamondLeaders >= 2) {
    achievedRank = 'Emerald';
    rankBonus = 1000000;
    rankBadgeColor = '#50C878';
  } else if (selfInvestment >= 5000 && teamBusiness >= 100000 && platinumLeaders >= 2) {
    achievedRank = 'Diamond';
    rankBonus = 30000;
    rankBadgeColor = '#B9F2FF';
  } else if (selfInvestment >= 2000 && teamBusiness >= 50000 && goldLeaders >= 2) {
    achievedRank = 'Platinum';
    rankBonus = 7000;
    rankBadgeColor = '#E5E4E2';
  } else if (selfInvestment >= 1000 && teamBusiness >= 35000) {
    achievedRank = 'Gold';
    rankBonus = 1500;
    rankBadgeColor = '#FFD700';
  } else if (selfInvestment >= 300 && teamBusiness >= 1500) {
    achievedRank = 'Silver';
    rankBonus = 500;
    rankBadgeColor = '#C0C0C0';
  } else if (selfInvestment >= 200 && teamBusiness >= 500) {
    achievedRank = 'Bronze';
    rankBonus = 250;
    rankBadgeColor = '#CD7F32';
  }

  // 6. Leadership Monthly Bonus Logic (Requires Rank + Monthly Target)
  let leadershipMonthlyBonus = 0;
  const rankPriority = { None: 0, Bronze: 1, Silver: 2, Gold: 3, Platinum: 4, Diamond: 5, Emerald: 6 };
  const currentPriority = rankPriority[achievedRank];

  if (currentPriority >= 6 && monthlyBusiness >= 20000000) {
    leadershipMonthlyBonus = 50000;
  } else if (currentPriority >= 5 && monthlyBusiness >= 1000000) {
    leadershipMonthlyBonus = 5000;
  } else if (currentPriority >= 4 && monthlyBusiness >= 50000) {
    leadershipMonthlyBonus = 2000;
  } else if (currentPriority >= 3 && monthlyBusiness >= 15000) {
    leadershipMonthlyBonus = 500;
  } else if (currentPriority >= 2 && monthlyBusiness >= 5000) {
    leadershipMonthlyBonus = 200;
  } else if (currentPriority >= 1 && monthlyBusiness >= 2000) {
    leadershipMonthlyBonus = 150;
  }

  // Total Estimated Year 1 Payout
  const totalYearOneEstimated = 
    joinBonus + 
    (dailyRoi * 365) + 
    referralIncome + 
    boosterIncome + 
    rankBonus + 
    (leadershipMonthlyBonus * 12);

  const resetDefaults = () => {
    setSelfInvestment(1000);
    setDirectBusiness(2000);
    setTeamBusiness(35000);
    setMonthlyBusiness(15000);
    setActivationDays(5);
    setGoldLeaders(0);
    setPlatinumLeaders(0);
    setDiamondLeaders(0);
  };

  return (
    <section id="calculator" className="calculator-section">
      <div className="container">
        <div className="section-title">
          <h2>INTERACTIVE <span>INCOME CALCULATOR</span></h2>
          <p>Simulate Earnings Across All 6 Unity Nivo Income Streams</p>
        </div>

        <div className="calculator-grid">
          {/* LEFT: INPUT CONTROLS PANEL */}
          <div className="calc-inputs-panel card-base">
            <div className="panel-header">
              <Calculator size={22} color="#ffb800" />
              <h3>Input Parameters</h3>
              <button className="reset-btn" onClick={resetDefaults} title="Reset to Defaults">
                <RefreshCw size={14} /> Reset
              </button>
            </div>

            {/* Slider 1: Self Investment */}
            <div className="input-group">
              <div className="input-label-row">
                <label>Self Investment ($)</label>
                <span className="input-val-badge">${selfInvestment.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="30" 
                max="25000" 
                step="50" 
                value={selfInvestment} 
                onChange={(e) => setSelfInvestment(Number(e.target.value))}
                className="calc-range"
              />
              <div className="range-hints">
                <span>Min: $30</span>
                <span>Bronze: $200</span>
                <span>Gold: $1k</span>
                <span>Max: $25k</span>
              </div>
            </div>

            {/* Slider 2: Direct Referral Business */}
            <div className="input-group">
              <div className="input-label-row">
                <label>Direct Referral Volume ($)</label>
                <span className="input-val-badge">${directBusiness.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="50000" 
                step="100" 
                value={directBusiness} 
                onChange={(e) => setDirectBusiness(Number(e.target.value))}
                className="calc-range"
              />
              <span className="input-hint">Earns 15% direct commission</span>
            </div>

            {/* Slider 3: Cumulative Team Business */}
            <div className="input-group">
              <div className="input-label-row">
                <label>Team Business ($)</label>
                <span className="input-val-badge">${teamBusiness.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="200000" 
                step="500" 
                value={teamBusiness} 
                onChange={(e) => setTeamBusiness(Number(e.target.value))}
                className="calc-range"
              />
              <span className="input-hint">Determines lifetime rank achievement</span>
            </div>

            {/* Slider 4: Monthly Team Business */}
            <div className="input-group">
              <div className="input-label-row">
                <label>Monthly Team Business ($)</label>
                <span className="input-val-badge">${monthlyBusiness.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100000" 
                step="500" 
                value={monthlyBusiness} 
                onChange={(e) => setMonthlyBusiness(Number(e.target.value))}
                className="calc-range"
              />
              <span className="input-hint">Determines Leadership Monthly Bonus</span>
            </div>

            {/* Slider 5: Activation Window Days */}
            <div className="input-group">
              <div className="input-label-row">
                <label>Activation Time (Days)</label>
                <span className="input-val-badge">{activationDays} Days</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                step="1" 
                value={activationDays} 
                onChange={(e) => setActivationDays(Number(e.target.value))}
                className="calc-range"
              />
              <span className="input-hint">Booster requires &lt;= 15 days + min $300 deposit</span>
            </div>

            {/* Leader Qualification Selectors for Platinum/Diamond/Emerald */}
            <div className="leaders-row">
              <div className="leader-select-item">
                <label>Gold Downlines</label>
                <input 
                  type="number" 
                  min="0" 
                  max="10" 
                  value={goldLeaders} 
                  onChange={(e) => setGoldLeaders(Number(e.target.value))}
                />
              </div>
              <div className="leader-select-item">
                <label>Platinum Downlines</label>
                <input 
                  type="number" 
                  min="0" 
                  max="10" 
                  value={platinumLeaders} 
                  onChange={(e) => setPlatinumLeaders(Number(e.target.value))}
                />
              </div>
              <div className="leader-select-item">
                <label>Diamond Downlines</label>
                <input 
                  type="number" 
                  min="0" 
                  max="10" 
                  value={diamondLeaders} 
                  onChange={(e) => setDiamondLeaders(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: REAL-TIME RESULTS & BREAKDOWN */}
          <div className="calc-results-panel card-base">
            <div className="results-rank-header">
              <div className="rank-status-box">
                <span className="rank-status-label">Achieved Rank</span>
                <div className="rank-badge-display" style={{ borderColor: rankBadgeColor, color: rankBadgeColor }}>
                  <Award size={20} />
                  <span>{achievedRank}</span>
                </div>
              </div>

              <div className="total-projected-box">
                <span className="proj-label">Est. Year 1 Potential</span>
                <span className="proj-amount">${Math.round(totalYearOneEstimated).toLocaleString()}</span>
              </div>
            </div>

            {/* Breakdown Cards Grid */}
            <div className="breakdown-grid">
              {/* Card 1: Join Bonus */}
              <div className="result-card">
                <div className="res-card-top">
                  <Gift size={18} color="#ffb800" />
                  <span>1. Join Bonus</span>
                </div>
                <div className="res-card-value">${joinBonus}</div>
                <span className="res-card-sub">One-time credit on activation</span>
              </div>

              {/* Card 2: Daily ROI */}
              <div className="result-card">
                <div className="res-card-top">
                  <TrendingUp size={18} color="#ffb800" />
                  <span>2. ROI Income (0.5%)</span>
                </div>
                <div className="res-card-value">${dailyRoi.toFixed(2)} <small>/ day</small></div>
                <span className="res-card-sub">${monthlyRoi.toFixed(0)} / mo | 15 days: ${fifteenDayRoi.toFixed(0)}</span>
              </div>

              {/* Card 3: Referral Income */}
              <div className="result-card">
                <div className="res-card-top">
                  <Users size={18} color="#ffb800" />
                  <span>3. Referral Income (15%)</span>
                </div>
                <div className="res-card-value">${referralIncome.toLocaleString()}</div>
                <span className="res-card-sub">15% of ${directBusiness.toLocaleString()} direct sales</span>
              </div>

              {/* Card 4: Booster Income */}
              <div className={`result-card ${isBoosterEligible ? 'active-booster' : 'inactive-booster'}`}>
                <div className="res-card-top">
                  <Zap size={18} color={isBoosterEligible ? '#ffb800' : '#64748b'} />
                  <span>4. Booster Income (15%)</span>
                </div>
                <div className="res-card-value">${boosterIncome.toLocaleString()}</div>
                <span className="res-card-sub">
                  {isBoosterEligible ? '✓ 15-day / $300 criteria met' : '✕ Requires <=15 days & min $300'}
                </span>
              </div>

              {/* Card 5: Rank Achievement Bonus */}
              <div className="result-card highlight">
                <div className="res-card-top">
                  <Award size={18} color="#ffb800" />
                  <span>5. Achievement Bonus</span>
                </div>
                <div className="res-card-value gold-text">${rankBonus.toLocaleString()}</div>
                <span className="res-card-sub">{achievedRank} Rank Achievement</span>
              </div>

              {/* Card 6: Leadership Monthly Bonus */}
              <div className="result-card highlight">
                <div className="res-card-top">
                  <Crown size={18} color="#c084fc" />
                  <span>6. Leadership Monthly</span>
                </div>
                <div className="res-card-value green-text">${leadershipMonthlyBonus.toLocaleString()} <small>/ mo</small></div>
                <span className="res-card-sub">Annual value: ${(leadershipMonthlyBonus * 12).toLocaleString()}</span>
              </div>
            </div>

            {/* Summary Formula Bar */}
            <div className="calc-summary-footer">
              <div className="formula-item">
                <span className="f-label">Daily Yield:</span>
                <span className="f-val">${dailyRoi.toFixed(2)}/day</span>
              </div>
              <div className="formula-item">
                <span className="f-label">One-Time Bonuses:</span>
                <span className="f-val">${(joinBonus + referralIncome + boosterIncome + rankBonus).toLocaleString()}</span>
              </div>
              <div className="formula-item">
                <span className="f-label">Monthly Leadership:</span>
                <span className="f-val">${leadershipMonthlyBonus.toLocaleString()}/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
