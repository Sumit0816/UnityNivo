import React from 'react';
import './BusinessPlanTable.css';

/**
 * Business Plan Landing Page Component
 * Renders the clean, transparent business plan specs table matching the landing page design.
 */
export default function BusinessPlanTable() {
  const businessSpecs = [
    { label: 'Minimum Deposit', value: '$30', isGold: true },
    { label: 'Deposit Currency', value: 'USDT (BEP-20)', isGold: false },
    { label: 'Minimum Withdrawal', value: '$15', isGold: true },
    { label: 'Withdrawal Charge', value: '5%', isGold: false },
    { label: 'Withdrawal Days', value: 'Monday – Friday', isGold: false },
    { label: 'Withdrawal Time', value: 'Within 24 Hours', isGold: false },
  ];

  return (
    <section id="business-plan" className="business-plan-section">
      <div className="container">
        <div className="section-title">
          <h2>BUSINESS <span>PLAN</span></h2>
          <p>Simple, Transparent & Profitable</p>
        </div>

        <div className="business-plan-card card-base">
          <table className="business-simple-table">
            <tbody>
              {businessSpecs.map((item, index) => (
                <tr key={index}>
                  <td className="spec-label">{item.label}</td>
                  <td className={`spec-value ${item.isGold ? 'gold-value' : 'white-value'}`}>
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

