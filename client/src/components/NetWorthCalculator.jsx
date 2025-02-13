// NetWorthCalculator.js
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "../styles/FinancialTools.css";

const NetWorthCalculator = ({ onClose }) => {
  const [cash, setCash] = useState(0);
  const [investments, setInvestments] = useState(0);
  const [property, setProperty] = useState(0);
  const [otherAssets, setOtherAssets] = useState(0);
  const [loans, setLoans] = useState(0);
  const [creditCardDebt, setCreditCardDebt] = useState(0);
  const [otherLiabilities, setOtherLiabilities] = useState(0);

  const totalAssets = cash + investments + property + otherAssets;
  const totalLiabilities = loans + creditCardDebt + otherLiabilities;
  const netWorth = totalAssets - totalLiabilities;

  const data = {
    labels: ["Assets", "Liabilities"],
    datasets: [
      {
        data: [totalAssets, totalLiabilities],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="calculator-title-card">Net Worth Calculator</h2>
        <div className="input-group">
          <label>Cash and Savings (₹)</label>
          <input
            type="number"
            value={cash}
            onChange={(e) => setCash(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Investments (₹)</label>
          <input
            type="number"
            value={investments}
            onChange={(e) => setInvestments(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Property Value (₹)</label>
          <input
            type="number"
            value={property}
            onChange={(e) => setProperty(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Other Assets (₹)</label>
          <input
            type="number"
            value={otherAssets}
            onChange={(e) => setOtherAssets(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Loans (₹)</label>
          <input
            type="number"
            value={loans}
            onChange={(e) => setLoans(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Credit Card Debt (₹)</label>
          <input
            type="number"
            value={creditCardDebt}
            onChange={(e) => setCreditCardDebt(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Other Liabilities (₹)</label>
          <input
            type="number"
            value={otherLiabilities}
            onChange={(e) => setOtherLiabilities(parseFloat(e.target.value))}
          />
        </div>
        <div className="result">
          Net Worth: ₹{netWorth.toLocaleString()}
        </div>
        <div style={{ width: "300px", margin: "0 auto" }}>
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default NetWorthCalculator;