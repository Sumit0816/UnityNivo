import React from 'react';
import './BusinessPlanTable.css';

/**
 * Business Plan Landing Page Component
 * Renders the clean business plan specs table. Pricing numbers are hidden until user logs in.
 */
export default function BusinessPlanTable({ isLoggedIn }) {
  const businessSpecs = [
    { label: 'Minimum Deposit', value: isLoggedIn ? '$30' : 'Login to view', isGold: true },
    { label: 'Deposit Currency', value: 'USDT (BEP-20)', isGold: false },
    { label: 'Minimum Withdrawal', value: isLoggedIn ? '$15' : 'Login to view', isGold: true },
    { label: 'Withdrawal Charge', value: isLoggedIn ? '5%' : 'Login to view', isGold: false },
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


