// InsuranceNeedsCalculator.js
import React, { useState } from "react";
import "../styles/FinancialTools.css";

const InsuranceNeedsCalculator = ({ onClose }) => {
  const [debt, setDebt] = useState(0);
  const [income, setIncome] = useState(0);
  const [years, setYears] = useState(10);
  const [mortgage, setMortgage] = useState(0);
  const [education, setEducation] = useState(0);
  const [savings, setSavings] = useState(0);

  const calculateInsuranceNeed = () => {
    return debt + income * years + mortgage + education - savings;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
	<path fill="#cc0a0a" d="m8.746 8l3.1-3.1a.527.527 0 1 0-.746-.746L8 7.254l-3.1-3.1a.527.527 0 1 0-.746.746l3.1 3.1l-3.1 3.1a.527.527 0 1 0 .746.746l3.1-3.1l3.1 3.1a.527.527 0 1 0 .746-.746zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16" />
</svg>
        </button>
        <h2 className="calculator-title-card">Insurance Needs Calculator</h2>
        <div className="input-group">
          <label>Total Debt (₹)</label>
          <input
            type="number"
            value={debt}
            onChange={(e) => setDebt(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Annual Income (₹)</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Years of Income Replacement</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Mortgage Balance (₹)</label>
          <input
            type="number"
            value={mortgage}
            onChange={(e) => setMortgage(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Education Costs (₹)</label>
          <input
            type="number"
            value={education}
            onChange={(e) => setEducation(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Savings (₹)</label>
          <input
            type="number"
            value={savings}
            onChange={(e) => setSavings(parseFloat(e.target.value))}
          />
        </div>
        <div className="result">
          Recommended Insurance Coverage: ₹{calculateInsuranceNeed().toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default InsuranceNeedsCalculator;