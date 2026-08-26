import React, { useState } from 'react';
import { 
  Code, 
  CheckSquare, 
  HelpCircle, 
  Terminal, 
  Play, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Layers, 
  ShieldAlert, 
  Copy, 
  Check,
  Cpu
} from 'lucide-react';
import './DeveloperReference.css';

/**
 * Developer Reference Dashboard Component
 * Implements Section 5 (Implementation Checklist), Section 6 (Rules Needing Final Confirmation),
 * and an interactive API & Ledger simulator for Unity Nivo developers.
 */
export default function DeveloperReference() {
  const [activeDevTab, setActiveDevTab] = useState('checklist'); // 'checklist' | 'decisions' | 'ledger'
  const [copiedCode, setCopiedCode] = useState(false);

  // Section 5: Developer Implementation Checklist (16 Items)
  const [checklistItems, setChecklistItems] = useState([
    { id: 1, category: 'Core Auth', title: 'User registration & unique user ID mapping', status: 'completed' },
    { id: 2, category: 'Network', title: 'Sponsor/referral tree relationship mapping', status: 'completed' },
    { id: 3, category: 'Ledger', title: 'Investment & activation transaction ledger', status: 'completed' },
    { id: 4, category: 'Join Bonus', title: 'Join Bonus eligibility ($1) & one-time credit control', status: 'completed' },
    { id: 5, category: 'ROI Engine', title: 'Daily ROI (0.5%) accrual engine with start date, duration & caps', status: 'in-progress' },
    { id: 6, category: 'Referral', title: '15% Referral Income calculation & source transaction linkage', status: 'completed' },
    { id: 7, category: 'Booster', title: 'Activity ID creation timestamp & 15-day Booster deadline clock', status: 'completed' },
    { id: 8, category: 'Booster', title: 'Minimum $300 Booster qualification validator', status: 'completed' },
    { id: 9, category: 'Rank Engine', title: 'Rank calculation engine for Self Business & Team Business', status: 'in-progress' },
    { id: 10, category: 'Rank Engine', title: 'Rank Bonus eligibility, tier upgrades & payout history', status: 'in-progress' },
    { id: 11, category: 'Leadership', title: 'Monthly business aggregation & month-end reset/rollover rules', status: 'in-progress' },
    { id: 12, category: 'Leadership', title: 'Leadership Monthly Bonus calculation & payout ledger', status: 'in-progress' },
    { id: 13, category: 'Wallet', title: 'Multi-category wallet ledger with separate earning buckets', status: 'completed' },
    { id: 14, category: 'Admin', title: 'Admin panel controls for rules, percentages, limits & eligibility', status: 'pending' },
    { id: 15, category: 'Audit', title: 'Audit logging engine for every earning credit & reversal event', status: 'pending' },
    { id: 16, category: 'Compliance', title: 'Refund, chargeback, cancellation & duplicate transaction guard', status: 'pending' },
  ]);

  // Section 6: Rules That Need Final Confirmation Before Coding (11 Items)
  const [decisionRules, setDecisionRules] = useState([
    { rule: 'ROI Duration', question: 'How many days can 0.5% ROI accrue?', currentChoice: 'Configurable (Default: 400 Days)', status: 'Decided' },
    { rule: 'ROI Cap', question: 'Is there a maximum ROI amount or multiple of principal?', currentChoice: '3x Principal Max Cap', status: 'Decided' },
    { rule: 'Principal', question: 'Is principal refundable/withdrawable, and under what conditions?', currentChoice: 'Locked during active ROI cycle', status: 'Review Needed' },
    { rule: 'Referral Base', question: '15% is calculated on which exact transaction amount?', currentChoice: 'Eligible Direct Investment Principal', status: 'Decided' },
    { rule: 'Booster Base', question: '15% is calculated on which exact transaction/business amount?', currentChoice: 'Qualifying Activation Amount', status: 'Decided' },
    { rule: 'Booster Timing', question: 'What event starts the 15-day clock?', currentChoice: 'Activity ID Creation Timestamp', status: 'Decided' },
    { rule: 'Rank Period', question: 'Is Self/Team Business cumulative, monthly, or lifetime?', currentChoice: 'Cumulative Lifetime Volume', status: 'Decided' },
    { rule: 'Rank Bonus', question: 'One-time, recurring, or payable on each rank achievement?', currentChoice: 'One-Time on Rank Unlock', status: 'Decided' },
    { rule: 'Leadership Bonus', question: 'Monthly qualification period and payout date?', currentChoice: 'Calendar Month (1st-31st), Paid 1st of next month', status: 'Decided' },
    { rule: 'Team Business', question: 'Which levels/branches count toward team business?', currentChoice: 'Unilevel Direct Downline Tree (50% Leg Rule)', status: 'Review Needed' },
    { rule: 'Eligibility', question: 'Any KYC, minimum withdrawal, account status, or other conditions?', currentChoice: '$15 Min Withdrawal, 5% Fee, Active ID Required', status: 'Decided' },
  ]);

  // Interactive Simulated Ledger State
  const [simulatedLedger, setSimulatedLedger] = useState([
    { id: 'TX-1001', type: 'JOIN_BONUS', amount: 1.00, category: 'Join Bonus', timestamp: '2026-08-25 10:00:00', status: 'CREDITED' },
    { id: 'TX-1002', type: 'BOOSTER_INCOME', amount: 150.00, category: 'Booster Income', timestamp: '2026-08-25 10:15:00', status: 'CREDITED' },
    { id: 'TX-1003', type: 'REFERRAL_INCOME', amount: 300.00, category: 'Referral Income', timestamp: '2026-08-25 11:30:00', status: 'CREDITED' },
    { id: 'TX-1004', type: 'ROI_DAILY', amount: 5.00, category: 'ROI Income', timestamp: '2026-08-25 23:59:59', status: 'CREDITED' },
  ]);

  const toggleChecklist = (id) => {
    setChecklistItems(prev => prev.map(item => {
      if (item.id === id) {
        const nextStatus = item.status === 'completed' ? 'in-progress' : item.status === 'in-progress' ? 'pending' : 'completed';
        return { ...item, status: nextStatus };
      }
      return item;
    }));
  };

  const handleSimulateTx = (type) => {
    const newTxId = `TX-${1000 + simulatedLedger.length + 1}`;
    const now = new Date().toISOString().replace('T', ' ').substring(0, 19);

    let newEntry = null;
    if (type === 'ROI') {
      newEntry = { id: newTxId, type: 'ROI_DAILY', amount: 5.00, category: 'ROI Income', timestamp: now, status: 'CREDITED' };
    } else if (type === 'REFERRAL') {
      newEntry = { id: newTxId, type: 'REFERRAL_INCOME', amount: 150.00, category: 'Referral Income', timestamp: now, status: 'CREDITED' };
    } else if (type === 'RANK') {
      newEntry = { id: newTxId, type: 'RANK_ACHIEVEMENT', amount: 1500.00, category: 'Rank Bonus (Gold)', timestamp: now, status: 'CREDITED' };
    } else if (type === 'LEADERSHIP') {
      newEntry = { id: newTxId, type: 'LEADERSHIP_MONTHLY', amount: 500.00, category: 'Leadership Monthly (Gold)', timestamp: now, status: 'CREDITED' };
    }

    if (newEntry) {
      setSimulatedLedger([newEntry, ...simulatedLedger]);
    }
  };

  const copySampleCode = () => {
    const snippet = `// Unity Nivo Business Plan Engine Spec
const calculateIncome = (user) => {
  const joinBonus = user.isActivated ? 1.0 : 0.0;
  const dailyRoi = user.selfInvestment * 0.005;
  const referralBonus = user.directVolume * 0.15;
  const isBooster = user.activationDays <= 15 && user.selfInvestment >= 300;
  const boosterBonus = isBooster ? user.selfInvestment * 0.15 : 0;
  return { joinBonus, dailyRoi, referralBonus, boosterBonus };
};`;
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="dev-reference" className="dev-ref-section">
      <div className="container">
        <div className="section-title">
          <h2>DEVELOPER <span>REFERENCE DASHBOARD</span></h2>
          <p>Technical Architecture, Implementation Checklist & Rule Decision Matrix</p>
        </div>

        {/* Developer Tab Navigation */}
        <div className="dev-tabs">
          <button 
            className={`dev-tab ${activeDevTab === 'checklist' ? 'active' : ''}`}
            onClick={() => setActiveDevTab('checklist')}
          >
            <CheckSquare size={18} />
            <span>Implementation Checklist (Sec 5)</span>
          </button>
          <button 
            className={`dev-tab ${activeDevTab === 'decisions' ? 'active' : ''}`}
            onClick={() => setActiveDevTab('decisions')}
          >
            <HelpCircle size={18} />
            <span>Rule Confirmation Matrix (Sec 6)</span>
          </button>
          <button 
            className={`dev-tab ${activeDevTab === 'ledger' ? 'active' : ''}`}
            onClick={() => setActiveDevTab('ledger')}
          >
            <Terminal size={18} />
            <span>Ledger & API Engine Simulator</span>
          </button>
        </div>

        {/* TAB 1: IMPLEMENTATION CHECKLIST */}
        {activeDevTab === 'checklist' && (
          <div className="dev-tab-content fade-in">
            <div className="checklist-summary-bar card-base">
              <div className="summary-stat">
                <span className="stat-num">{checklistItems.filter(i => i.status === 'completed').length} / {checklistItems.length}</span>
                <span className="stat-label">Modules Ready</span>
              </div>
              <p className="summary-desc">
                Interactive tracker for the 16 core business-engine modules specified in Section 5 of the Developer Reference.
              </p>
            </div>

            <div className="checklist-grid">
              {checklistItems.map((item) => (
                <div 
                  key={item.id} 
                  className={`checklist-card card-base status-${item.status}`}
                  onClick={() => toggleChecklist(item.id)}
                >
                  <div className="chk-top">
                    <span className="chk-category">{item.category}</span>
                    <span className={`chk-badge badge-${item.status}`}>
                      {item.status === 'completed' && <CheckCircle2 size={12} />}
                      {item.status === 'in-progress' && <Clock size={12} />}
                      {item.status}
                    </span>
                  </div>
                  <h4 className="chk-title">{item.title}</h4>
                  <span className="chk-click-hint">Click to toggle status</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: RULES DECISION MATRIX */}
        {activeDevTab === 'decisions' && (
          <div className="dev-tab-content fade-in">
            <div className="decisions-header-box card-base">
              <ShieldAlert size={24} color="#ffb800" />
              <div>
                <h3>Section 6: Business Rules Decision Matrix</h3>
                <p>Verify operator rules before final backend smart-contract / database deployment.</p>
              </div>
            </div>

            <div className="decisions-table-wrapper card-base">
              <table className="decisions-table">
                <thead>
                  <tr>
                    <th>Rule Name</th>
                    <th>Required Decision Question</th>
                    <th>Current Reference Specification</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {decisionRules.map((r, i) => (
                    <tr key={i}>
                      <td className="rule-name-td">
                        <strong>{r.rule}</strong>
                      </td>
                      <td className="rule-question-td">{r.question}</td>
                      <td className="rule-choice-td">
                        <span className="choice-pill">{r.currentChoice}</span>
                      </td>
                      <td className="rule-status-td">
                        <span className={`status-tag ${r.status.toLowerCase().replace(' ', '-')}`}>
                          {r.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: LEDGER & API ENGINE SIMULATOR */}
        {activeDevTab === 'ledger' && (
          <div className="dev-tab-content fade-in">
            <div className="simulator-layout">
              {/* Left Code & Controls */}
              <div className="sim-code-box card-base">
                <div className="code-box-header">
                  <Cpu size={18} color="#ffb800" />
                  <span>Business Logic Spec (JavaScript)</span>
                  <button className="copy-code-btn" onClick={copySampleCode}>
                    {copiedCode ? <Check size={14} color="#4ade80" /> : <Copy size={14} />}
                    {copiedCode ? 'Copied' : 'Copy Code'}
                  </button>
                </div>
                <pre className="code-display">
{`// Unity Nivo Business Rules Engine
function evaluateUserEarnings(user) {
  const joinBonus = user.isActivated ? 1.00 : 0.00;
  const roiDaily = user.selfInvestment * 0.005; // 0.5% daily
  const referralIncome = user.directVolume * 0.15; // 15%
  
  // Booster: 15-day deadline & min $300 investment
  const boosterEligible = user.activationDays <= 15 
                       && user.selfInvestment >= 300;
  const boosterIncome = boosterEligible ? user.selfInvestment * 0.15 : 0;
  
  return { joinBonus, roiDaily, referralIncome, boosterIncome };
}`}
                </pre>

                <div className="sim-trigger-bar">
                  <span className="trigger-title">Simulate Ledger Event:</span>
                  <div className="trigger-btns">
                    <button className="btn-sim" onClick={() => handleSimulateTx('ROI')}>
                      + ROI ($5.00)
                    </button>
                    <button className="btn-sim" onClick={() => handleSimulateTx('REFERRAL')}>
                      + Referral ($150)
                    </button>
                    <button className="btn-sim" onClick={() => handleSimulateTx('RANK')}>
                      + Rank ($1,500)
                    </button>
                    <button className="btn-sim" onClick={() => handleSimulateTx('LEADERSHIP')}>
                      + Monthly ($500)
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Live Ledger Display */}
              <div className="sim-ledger-box card-base">
                <div className="ledger-header">
                  <Terminal size={18} color="#ffb800" />
                  <h3>Simulated Wallet Ledger Stream</h3>
                  <span className="ledger-count">{simulatedLedger.length} Transactions</span>
                </div>

                <div className="ledger-stream">
                  {simulatedLedger.map((tx) => (
                    <div key={tx.id} className="ledger-tx-item">
                      <div className="tx-left">
                        <span className="tx-id">{tx.id}</span>
                        <span className="tx-cat">{tx.category}</span>
                        <span className="tx-time">{tx.timestamp}</span>
                      </div>
                      <div className="tx-right">
                        <span className="tx-amount">+${tx.amount.toFixed(2)}</span>
                        <span className="tx-status">{tx.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
