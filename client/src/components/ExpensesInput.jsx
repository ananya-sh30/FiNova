import React, { useState } from "react";
import "../styles/ExpensesInput.css";
import calcLogo from "../assets/calc.png";
import {TickIcon} from "./Icons";

const ExpensesInput = ({ isLoggedIn, userEmail }) => {
  const [isToday, setIsToday] = useState(true);
  const [checks, setChecks] = useState({
    totalExpenses: 0,
    hasFood: false,
    optimized: false,
    allCategories: false,
    withinBudget: true,
  });
  const [inputValues, setInputValues] = useState({
    food: 0,
    transport: 0,
    housing: 0,
    entertainment: 0,
    health: 0,
    miscellaneous: 0,
  });
  const [expensesData, setExpensesData] = useState([]);

  const todayExpenses = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="#0a40cc" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" />
    </svg>, title: "Food & Beverages", time: "5:12 pm • Spent in Cafe", id: "food-input" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" stroke="#0a40cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
        </g>
    </svg>, title: "Transportation", time: "8:30 am • Metro ride", id: "transport-input" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
	<path fill="#0a40cc" fill-rule="evenodd" d="M12.5 12.618c.307-.275.5-.674.5-1.118V6.977a1.5 1.5 0 0 0-.585-1.189l-3.5-2.692a1.5 1.5 0 0 0-1.83 0l-3.5 2.692A1.5 1.5 0 0 0 3 6.978V11.5A1.496 1.496 0 0 0 4.493 13H5V9.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V13h.507c.381-.002.73-.146.993-.382m2-1.118a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3V6.977A3 3 0 0 1 2.67 4.6l3.5-2.692a3 3 0 0 1 3.66 0l3.5 2.692a3 3 0 0 1 1.17 2.378zm-5-2A.5.5 0 0 0 9 9H7a.5.5 0 0 0-.5.5V13h3z" clip-rule="evenodd" />
</svg>, title: "Housing & Utilities", time: "1:00 pm • Electricity Payment", id: "housing-input" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="#0a40cc" d="m20.84 2.18l-3.93.78l2.74 3.54l1.97-.4zm-6.87 1.36L12 3.93l2.75 3.53l1.96-.39zm-4.9.96l-1.97.41l2.75 3.53l1.96-.39zm-4.91 1l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 10l4.9-.97zM20 12v8H4v-8zm2-2H2v10a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2z" />
    </svg>, title: "Entertainment", time: "11:00 pm • Spotify Premium Subscription", id: "entertainment-input" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="#0a40cc" d="M14 11h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2m6.16-6A6.29 6.29 0 0 0 12 4.41a6.27 6.27 0 0 0-8.16 9.48l6 6.05a3 3 0 0 0 4.24 0l6-6.05A6.27 6.27 0 0 0 20.16 5m-1.41 7.46l-6 6a1 1 0 0 1-1.42 0l-6-6a4.29 4.29 0 0 1 0-6a4.27 4.27 0 0 1 6 0a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 0a4.29 4.29 0 0 1 0 6.02Z" />
    </svg>, title: "Health & Personal Care", time: "11:00 am • Medicines", id: "health-input" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" stroke="#0a40cc" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M7 10h3V7L6.5 3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1-3 3l-6-6a6 6 0 0 1-8-8z" />
    </svg>, title: "Miscellaneous", time: "3:00 pm • Shopping", id: "miscellaneous-input" },
  ];

  const toggleView = () => setIsToday(!isToday);

  const handleInputChange = (id, value) => {
    const category = id.split("-")[0]; // Extract category from id (e.g., "food-input" -> "food")
    setInputValues((prevValues) => ({
      ...prevValues,
      [category]: parseFloat(value) || 0,
    }));
  
    // Recalculate checks
    const total = Object.values(inputValues).reduce((acc, val) => acc + val, 0);
    const allCategoriesFilled = Object.values(inputValues).every((val) => val > 0);
  
    setChecks({
      totalExpenses: total,
      hasFood: inputValues.food > 0,
      optimized: total <= 5000,
      allCategories: allCategoriesFilled,
      withinBudget: total <= 3000,
    });
  };


  const handleSubmit = async () => {
    const dataToSave = {
      email: userEmail,
      date: new Date().toISOString().split("T")[0],
      food: inputValues.food,
      transport: inputValues.transport,
      housing: inputValues.housing,
      entertainment: inputValues.entertainment,
      health: inputValues.health,
      miscellaneous: inputValues.miscellaneous,
    };
  
    // Check if all amounts are zero
    const allZero = Object.values(inputValues).every((amount) => amount === 0);
    if (allZero) {
      alert("Please fill in at least one expense before submitting.");
      return;
    }
  
    try {
      const response = await fetch(`${process.env.REACT_APP_NODE_BACKEND_URL}/api/expenses/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSave),
      });
  
      if (response.ok) {
        alert("Expenses saved successfully!");
      } else {
        alert("Failed to save expenses. Please try again.");
      }
    } catch (error) {
      console.error("Error saving expenses:", error);
      alert("An error occurred while saving expenses.");
    }
  };

  return (
    <div className="expenses-input-container">
      {/* Header Section */}
     
      {/* Toggle Button */}
      <div className="toggle-section">
        <button className={`toggle-btn ${isToday ? "active" : ""}`} onClick={toggleView}>
          Today
        </button>
        <button className={`toggle-btn ${!isToday ? "active" : ""}`} onClick={toggleView}>
          Previous Day
        </button>
      </div>

      {/* Expenses Section */}
      {isToday ? (
        <div className="today-section-container">
          {/* Left Section */}
          <div className="right-section-today">
            <h2>Budget Like a Pro</h2>
            
            <ul className="checks-list">
            <li>
                <div className={`check-icon ${checks.totalExpenses > 0 ? "active" : ""}`}>
                {checks.totalExpenses > 0 ? <TickIcon/> : ""}
                </div>
                <span className={`check-text ${checks.totalExpenses > 0 ? "active" : ""}`}>
                Total Expenses Recorded: ₹{checks.totalExpenses}
                </span>
            </li>
            <li>
                <div className={`check-icon ${checks.hasFood ? "active" : ""}`}>
                {checks.hasFood ? <TickIcon/> : ""}
                </div>
                <span className={`check-text ${checks.hasFood ? "active" : ""}`}>
                Food & Beverages Expense Added
                </span>
            </li>
            <li>
                <div className={`check-icon ${checks.optimized ? "active" : ""}`}>
                {checks.optimized ? <TickIcon/> : ""}
                </div>
                <span className={`check-text ${checks.optimized ? "active" : ""}`}>
                Expenses Optimized (Under ₹5000)
                </span>
            </li>
            <li>
                <div className={`check-icon ${checks.allCategories ? "active" : ""}`}>
                {checks.allCategories ? <TickIcon/> : ""}
                </div>
                <span className={`check-text ${checks.allCategories ? "active" : ""}`}>
                All Expense Categories Covered
                </span>
            </li>
            <li>
                <div className={`check-icon ${checks.withinBudget ? "active" : ""}`}>
                {checks.withinBudget ? <TickIcon/> : ""}
                </div>
                <span className={`check-text ${checks.withinBudget ? "active" : ""}`}>
                Expenses Within Budget (₹3000)
                </span>
            </li>
            </ul>
            <img src={calcLogo} alt="" style={{ width: "300px", height: "300px" }} />

          </div>
          <div className="left-section-today">
          
            {todayExpenses.map((expense, index) => {
            const category = expense.id.split("-")[0]; // Extract category from id
            return (
                <div className="expense-card" key={index}>
                <div className="expense-icon">{expense.icon}</div>
                <div className="expense-details">
                    <p className="expense-title">{expense.title}</p>
                </div>
                <div className="expense-inputs">
                    <input
                    type="number"
                    className="expense-input"
                    id={expense.id}
                    placeholder="Amount (₹)"
                    value={inputValues[category]}
                    onChange={(e) => handleInputChange(expense.id, e.target.value)}
                    />
                    <select className="payment-method">
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                    <option value="online">Online</option>
                    </select>
                </div>
                </div>
            );
            })}
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>

          {/* Right Section (Dynamic Checks) */}
          
        </div>
      ) : (
        <div className="prevday-section">
          <h2>Previous Day's Expenses</h2>
          {todayExpenses.map((expense, index) => (
            <div className="expense-card" key={index}>
              <div className="expense-icon">{expense.icon}</div>
              <div className="expense-details">
                <p className="expense-title">{expense.title}</p>
                <p className="expense-time">{expense.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpensesInput;
