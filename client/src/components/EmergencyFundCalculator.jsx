// EmergencyFundCalculator.js
import React, { useState } from "react";
import "../styles/FinancialTools.css";

const EmergencyFundCalculator = ({ onClose }) => {
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [months, setMonths] = useState(6);
  const [currentSavings, setCurrentSavings] = useState(0);

  const calculateTarget = () => monthlyExpenses * months;
  const calculateProgress = () => (currentSavings / calculateTarget()) * 100;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="calculator-title-card">Emergency Fund Calculator</h2>
        <div className="input-group">
          <label>Monthly Expenses (₹)</label>
          <input
            type="number"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Number of Months to Cover</label>
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Current Savings (₹)</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(parseFloat(e.target.value))}
          />
        </div>
        <div className="result">
          Target Emergency Fund: ₹{calculateTarget().toLocaleString()}
        </div>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
        <div className="result">
          Progress: {calculateProgress().toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

export default EmergencyFundCalculator;