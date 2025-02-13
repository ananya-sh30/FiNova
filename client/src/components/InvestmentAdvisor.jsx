import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/InvestmentAdvisor.css";
import { InvIcon, GrowIcon, DurIcon, TipIcon, GoalIcon } from "./Icons";

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="progress-barr">
      {steps.map((_, index) => (
        <div
          key={index}
          className={`progress-step ${index <= currentStep ? "completed" : ""}`}
        >
          {index <= currentStep ? (
            <span className="tick"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="rgb(9, 38, 98)" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z" />
          </svg></span>
          ) : (
            <span className="step-number">{index + 1}</span>
          )}
        </div>
      ))}
    </div>
  );
};

const InvestmentAdvisor = () => {
  const [step, setStep] = useState(-1); // Track the current step (-1 for intro)
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [investmentYears, setInvestmentYears] = useState("");
  const [riskLevel, setRiskLevel] = useState("low");
  const [age, setAge] = useState("");
  const [financialGoal, setFinancialGoal] = useState("");
  const [advice, setAdvice] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const steps = [
    "Age",
    "Financial Goal",
    "Investment Amount",
    "Investment Years",
    "Risk Tolerance",
  ];

  const generateInvestmentAdvice = () => {
    if (
      !investmentAmount ||
      investmentAmount <= 0 ||
      !investmentYears ||
      investmentYears <= 0 ||
      !age ||
      age <= 0
    ) {
      setAdvice([{ error: "Please enter all fields with valid values." }]);
      return;
    }

    setAdvice([]); // Clear previous advice
    setIsGenerating(true); // Start AI generation effect

    const amount = parseFloat(investmentAmount);
    const years = parseInt(investmentYears);
    const userAge = parseInt(age);
    let investmentType = "";
    let expectedGrowth = "";
    let personalizedTip = "";
    let goalSuitability = "";

    switch (riskLevel) {
      case "low":
        investmentType = "Government bonds, Fixed Deposits, Index Funds";
        expectedGrowth = `${(amount * Math.pow(1.05, years)).toFixed(2)} (5% annual growth)`;
        personalizedTip = "Focus on stability and low-risk options.";
        break;
      case "medium":
        investmentType = "Balanced Mutual Funds, Blue-chip Stocks, REITs";
        expectedGrowth = `${(amount * Math.pow(1.08, years)).toFixed(2)} (8% annual growth)`;
        personalizedTip = "Diversify your portfolio for steady growth.";
        break;
      case "high":
        investmentType = "High-growth Stocks, Cryptocurrencies, Start-up Investments";
        expectedGrowth = `${(amount * Math.pow(1.12, years)).toFixed(2)} (12% annual growth)`;
        personalizedTip = "Be prepared for market volatility.";
        break;
      default:
        investmentType = "General diversified portfolio";
        expectedGrowth = "N/A";
        personalizedTip = "Consult a financial expert.";
    }

    if (financialGoal.toLowerCase() === "retirement" && userAge > 50) {
      goalSuitability = "Highly Suitable";
    } else if (financialGoal.toLowerCase() === "wealth creation" && riskLevel === "high") {
      goalSuitability = "Suitable";
    } else {
      goalSuitability = "Partially Suitable";
    }

    const newAdvice = [
      { icon: <InvIcon />, title: "Investment Type", content: investmentType },
      { icon: <GrowIcon />, title: "Expected Growth", content: `₹${expectedGrowth}` },
      { icon: <DurIcon />, title: "Duration", content: `${years} years` },
      { icon: <TipIcon />, title: "Personalized Tip", content: personalizedTip },
      { icon: <GoalIcon />, title: "Goal Suitability", content: goalSuitability },
    ];

    // Simulate AI generation with delays
    newAdvice.forEach((item, index) => {
      setTimeout(() => {
        setAdvice((prevAdvice) => [...prevAdvice, item]);
        if (index === newAdvice.length - 1) setIsGenerating(false); // Stop the generating effect
      }, index * 1000); // 1-second delay for each card
    });
  };

  const nextStep = () => setStep(step + 1);

  const inputFields = [
    {
      question: "What is your age?",
      input: (
        <input
          type="number"
          placeholder="Your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="advisor-input"
        />
      ),
    },
    {
      question: "What is your financial goal?",
      input: (
        <input
          type="text"
          placeholder="Financial Goal (e.g., Retirement, Wealth Creation)"
          value={financialGoal}
          onChange={(e) => setFinancialGoal(e.target.value)}
          className="advisor-input"
        />
      ),
    },
    {
      question: "How much do you want to invest?",
      input: (
        <input
          type="number"
          placeholder="Investment Amount (₹)"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
          className="advisor-input"
        />
      ),
    },
    {
      question: "For how many years do you want to invest?",
      input: (
        <input
          type="number"
          placeholder="Investment Duration (Years)"
          value={investmentYears}
          onChange={(e) => setInvestmentYears(e.target.value)}
          className="advisor-input"
        />
      ),
    },
    {
      question: "What is your risk tolerance?",
      input: (
        <select
          value={riskLevel}
          onChange={(e) => setRiskLevel(e.target.value)}
          className="advisor-select"
        >
          <option value="low">Low Risk</option>
          <option value="medium">Medium Risk</option>
          <option value="high">High Risk</option>
        </select>
      ),
    },
  ];

  return (
    <div className="advisor-container">
      <div className="container-half">
        <div className="half-circle-dash"></div>
      </div>
     
      <div className="form-containerrrr">
      <ProgressBar steps={steps} currentStep={step} />
        {step === -1 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="intro-container"
          >
            <div className="investment-advisor">
              <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
                <path fill="#e6efff" d="M21 8c-1.5 0-2.3 1.4-1.9 2.5l-3.6 3.6c-.3-.1-.7-.1-1 0l-2.6-2.6c.4-1.1-.4-2.5-1.9-2.5c-1.4 0-2.3 1.4-1.9 2.5L3.5 16c-1.1-.3-2.5.5-2.5 2c0 1.1.9 2 2 2c1.4 0 2.3-1.4 1.9-2.5l4.5-4.6c.3.1.7.1 1 0l2.6 2.6c-.3 1 .5 2.5 2 2.5s2.3-1.4 1.9-2.5l3.6-3.6c1.1.3 2.5-.5 2.5-1.9c0-1.1-.9-2-2-2m-6 1l.9-2.1L18 6l-2.1-.9L15 3l-.9 2.1L12 6l2.1.9zM3.5 11L4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z" />
              </svg>
              <h1 className="inves-heading">Investment Advisor</h1>
              <p className="animated-description">
                Get personalized investment suggestions tailored to your financial goals, risk tolerance, and duration. Click below to start!
              </p>
              <button className="advisor-button" onClick={nextStep}>
                Get Advice
              </button>
            </div>
          </motion.div>
        ) : step < inputFields.length ? (
          <AnimatePresence>
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="form-container"
            >
              <h3 className="form-question">{inputFields[step].question}</h3>
              {inputFields[step].input}
              <button className="advisor-button" onClick={nextStep}>
                Next
              </button>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="form-container">
            <h1 className="inves-heading">Investment Advisor</h1>
            <button className="advisor-button" onClick={generateInvestmentAdvice}>
              Get Suggestions
            </button>
          </div>
        )}
      </div>

      <div className="result-container">
        {advice.length > 0 && (
          <div className="advice-cards">
            {advice.map((item, index) => (
              <div key={index} className="advice-card">
                <div className="icon-part">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {isGenerating && <p>Generating advice...</p>}
      </div>
    </div>
  );
};

export default InvestmentAdvisor;