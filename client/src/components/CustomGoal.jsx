import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../styles/CustomGoal.css";
import { FaCheckCircle, FaCircle } from "react-icons/fa"; // Import icons from react-icons

const CustomGoal = ({ isLoggedIn, userEmail }) => {
  const [goalName, setGoalName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [timePeriod, setTimePeriod] = useState(1);
  const [inflationRate, setInflationRate] = useState(0);
  const [contributionFrequency, setContributionFrequency] = useState("monthly");
  const [savedGoals, setSavedGoals] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const chartRef = useRef(null);
  const [tableData, setTableData] = useState([]);

  const API_BASE_URL = process.env.REACT_APP_NODE_BACKEND_URL;

  useEffect(() => {
    if (isLoggedIn && userEmail) {
      fetchGoals();
    }
  }, [isLoggedIn, userEmail]);

  useEffect(() => {
    if (currentStep === 2) {
      generateTableData();
      renderChart();
    }
  }, [currentStep, timePeriod, monthlyContribution, inflationRate]);

  const fetchGoals = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/goals?userEmail=${userEmail}`);
      const data = await response.json();
      setSavedGoals(data);
    } catch (error) {
      console.error("Error fetching goals:", error);
    }
  };

  const saveGoal = async () => {
    if (!isLoggedIn) return alert("Please log in to save your goal.");

    const newGoal = { goalName, targetAmount, monthlyContribution, timePeriod, inflationRate, contributionFrequency, userEmail };

    try {
      const response = await fetch(`${API_BASE_URL}/api/goals/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGoal),
      });

      if (response.ok) {
        fetchGoals();
        setCurrentStep(3);
      } else {
        console.error("Failed to save goal");
      }
    } catch (error) {
      console.error("Error saving goal:", error);
    }
  };

  const generateTableData = () => {
    let data = [];
    let totalSaved = 0;
    const months = timePeriod * 12;
    for (let i = 1; i <= months; i++) {
      totalSaved += parseFloat(monthlyContribution);
      totalSaved *= 1 + (inflationRate / 100 / 12);
      data.push({ month: i, totalSaved: totalSaved.toFixed(2) });
    }
    setTableData(data);
  };

  const renderChart = () => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
      chartRef.current.chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: tableData.map((data) => `Month ${data.month}`),
          datasets: [
            {
              label: "Total Savings Over Time",
              data: tableData.map((data) => data.totalSaved),
              borderColor: "#4CAF50",
              fill: false,
            },
          ],
        },
      });
    }
  };

  return (
    <div className="goal-container">
      <h1 className="goal-title">Custom Goal Investment</h1>
      <div className="progress-indicator">
  <div className="step">
    <div className="step-icon">
      {currentStep > 1 ? (
        <FaCheckCircle className="completed" />
      ) : (
        <span className={`circlenum ${currentStep === 1 ? "active" : ""}`}>1</span>
      )}
    </div>
    <div className="step-label">Fill Form</div>
  </div>
  <div className="step">
    <div className="step-icon">
      {currentStep > 2 ? (
        <FaCheckCircle className="completed" />
      ) : (
        <span className={`circlenum ${currentStep === 2 ? "active" : ""}`}>2</span>
      )}
    </div>
    <div className="step-label">View Graph & Table</div>
  </div>
  <div className="step">
    <div className="step-icon">
      {currentStep > 3 ? (
        <FaCheckCircle className="completed" />
      ) : (
        <span className={`circlenum ${currentStep === 3 ? "active" : ""}`}>3</span>
      )}
    </div>
    <div className="step-label">Save Goal</div>
  </div>
</div>


      <div className="goal-wrapper">
        {currentStep === 1 && (
          <div className="goal-form">
            <h2>Create Your Goal</h2>
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="goalName">Goal Name</label>
                <input
                  id="goalName"
                  type="text"
                  placeholder="e.g., Buy a Car"
                  value={goalName}
                  onChange={(e) => setGoalName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="targetAmount">Target Amount (₹)</label>
                <input
                  id="targetAmount"
                  type="number"
                  placeholder="e.g., 50,000"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="monthlyContribution">Monthly Contribution (₹)</label>
                <input
                  id="monthlyContribution"
                  type="number"
                  placeholder="e.g., 5,000"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="inflationRate">Inflation Rate (%)</label>
                <input
                  id="inflationRate"
                  type="number"
                  placeholder="e.g., 6"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="timePeriod">Time Period (Years)</label>
                <select
                  id="timePeriod"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                >
                  {[...Array(10).keys()].map((year) => (
                    <option key={year + 1} value={year + 1}>
                      {year + 1} Year{year > 0 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button onClick={() => setCurrentStep(2)}>Next</button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="goal-graph-table">
            <h2>Graph & Table Representation</h2>
            <canvas ref={chartRef}></canvas>
            <table>
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Total Savings (₹)</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.month}</td>
                    <td>{data.totalSaved}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="table-placeholder">
              <button onClick={saveGoal}>Save Goal</button>
            </div>
            <button onClick={() => setCurrentStep(1)}>Back</button>
            <button onClick={() => setCurrentStep(3)}>Next</button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="saved-goals">
            <h2>Saved Goals</h2>
            {savedGoals.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Goal Name</th>
                    <th>Target Amount</th>
                    <th>Monthly Contribution</th>
                    <th>Contribution Frequency</th>
                  </tr>
                </thead>
                <tbody>
                {savedGoals.map((goal, index) => (
                  <tr key={index}>
                    <td data-label="Goal Name">{goal.goal_name}</td>
                    <td data-label="Target Amount">₹{goal.target_amount}</td>
                    <td data-label="Monthly Contribution">₹{goal.contribution_amount}</td>
                    <td data-label="Contribution Frequency">{goal.contribution_frequency}</td>
                  </tr>
                ))}
              </tbody>

              </table>
            ) : (
              <p>No saved goals found.</p>
            )}
            <button onClick={() => setCurrentStep(2)}>Back</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomGoal;