import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import "../styles/PersonalFinanceTracker.css";
import StoryBoard from "./StoryBoard";
import ExpensesInput from "./ExpensesInput";
import VideoPlayer from "./VideoPlayer";

const PersonalFinanceTracker = ({ isLoggedIn, userEmail }) => {
    const expenseChartRef = useRef(null);
  const barChartRef = useRef(null);
  const predictionGraphRef = useRef(null);
  let expenseChartInstance = useRef(null);
  let barChartInstance = useRef(null);
  let predictionGraphInstance = useRef(null);

  useEffect(() => {
    const destroyChart = (chartInstance) => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
  
      // Destroy existing charts before recreating
      destroyChart(expenseChartInstance);
      destroyChart(barChartInstance);
      destroyChart(predictionGraphInstance);
  
      const getCurrentWeekRange = () => {
        const today = new Date();
        const first = new Date(today);
        first.setDate(today.getDate() - today.getDay() + 1); // Start of the week (Monday)
        const last = new Date(first);
        last.setDate(first.getDate() + 6); // End of the week (Sunday)
      
        const formatDate = (date) =>
          `${date.getDate()} ${date.toLocaleString("default", { month: "short" })}`;
      
        // Update the paragraph with the week range
        const weekRangeElement = document.getElementById("week-range");
        if (weekRangeElement) {
          weekRangeElement.innerText = `${formatDate(first)} - ${formatDate(last)}`;
        }
      
        return { first, last };
      };
      
      // Ensure the function runs after the DOM is loaded
      document.addEventListener("DOMContentLoaded", () => {
        getCurrentWeekRange();
      });
      
      
      const fetchWeeklyExpenses = async (email) => {
   
        try {
          const response = await fetch(`${process.env.REACT_APP_NODE_BACKEND_URL}/api/expenses/get?email=${email}`);
          const data = await response.json();
          return data;
        } catch (error) {
          console.error("Error fetching expenses:", error);
          return [0, 0, 0, 0, 0, 0, 0];
        }
      };
      
      const updateExpenseChart = async () => {
        const email = userEmail;
        const weeklyExpenses = await fetchWeeklyExpenses(email);
      
        const expenseChartCtx = expenseChartRef.current.getContext("2d");
      
        // Destroy the existing chart instance if it exists
        if (expenseChartInstance.current) {
          expenseChartInstance.current.destroy();
        }
      
        // Ensure the canvas parent container has a fixed height in CSS
let cumulativeExpenses = [];
weeklyExpenses.reduce((total, expense) => {
  total += expense;
  cumulativeExpenses.push(total);
  return total;
}, 0);

expenseChartInstance.current = new Chart(expenseChartCtx, {
  type: "bar", // Base type is bar
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Daily Expenses",
        data: weeklyExpenses,
        backgroundColor: "rgba(0, 102, 255, 0.89)", // Modern blue shade
        borderColor: "rgb(27, 116, 249)",
        borderWidth: 2,
        borderRadius: 12, // Rounded bars
        barThickness: 40, // Prevents infinite stretch
        maxBarThickness: 50, // Ensures bars don’t expand infinitely
        type: "bar", // Keeps this dataset as a bar chart
      },
      {
        label: "Total Expenses So Far",
        data: cumulativeExpenses, // Add your cumulative data here
        borderColor: "rgba(99, 151, 255, 0.9)", // Vibrant pink for contrast
        backgroundColor: "rgba(164, 169, 235, 0.3)", // Light fill under the line
        borderWidth: 2,
        tension: 0.4, // Smooth line curve
        fill: true, // Adds subtle area fill below the line
        pointStyle: "circle",
        pointRadius: 3,
        pointHoverRadius: 5,
        type: "line", // Specifies this dataset as a line chart
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, // Prevents excessive stretching
    aspectRatio: 2, // Ensures a proper width-to-height ratio
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
            weight: "bold",
          },
          color: "#333",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(200, 200, 200, 0.2)", // Light grid for subtle guidance
        },
        ticks: {
          font: {
            size: 14,
            weight: "bold",
          },
          color: "#333",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#333",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleFont: { size: 14, weight: "bold" },
        bodyFont: { size: 12 },
        padding: 10,
        cornerRadius: 5,
      },
    },
  },
});


          
      };
      
      // Call the function to update the chart
      updateExpenseChart();
      
      

   

    const barChartCtx = barChartRef.current.getContext("2d");
    barChartInstance.current = new Chart(barChartCtx, {
      type: "bar",
      data: {
        labels: ["Food", "Transport", "Housing", "Entertainment", "Health", "Miscellaneous"],
        datasets: [
          {
            label: "Your Spending (₹)",
            data: [3000, 1500, 8000, 2500, 1200, 1800],
            backgroundColor: "rgba(102, 153, 255, 0.8)",
            borderRadius: 5,
          },
          {
            label: "Others’ Spending (₹)",
            data: [2700, 1600, 7500, 2200, 1400, 1900],
            backgroundColor: "rgba(0, 102, 255, 0.89)",
            borderRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: "Amount Spent (₹)", color: "black", font: { size: 10 } },
            ticks: { color: "black" },
            grid: { color: "rgba(255, 255, 255, 0.2)" },
          },
          x: { ticks: { color: "black" }, grid: { display: false } },
        },
        plugins: { legend: { labels: { color: "black" } } },
      },
    });

    const predictionGraphCtx = predictionGraphRef.current.getContext("2d");
    predictionGraphInstance.current = new Chart(predictionGraphCtx, {
      type: "line",
      data: {
        labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
        datasets: [
          {
            label: "Predicted Spending",
            data: [1000, 1200, 1500, 1700, 2000, 2300],
            borderColor: "purple",
            borderWidth: 2,
            fill: false,
          },
        ],
      },
    });
    return () => {
        destroyChart(expenseChartInstance);
        destroyChart(barChartInstance);
        destroyChart(predictionGraphInstance);
      };

    
  }, []);



  const getFutureSpending = () => {
    document.querySelector(".prediction-container").style.display = "none";
    document.getElementById("predictionGraph").style.display = "block";
  };
  const words = ["Review", "Analyze", "Predict", "Assess", "Monitor", "Optimize"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="journal">
       
      <div className="journal-header">
      
      <div>
      <div style={{ textAlign: "left", fontSize: "60px", fontWeight: "500", position: "relative", color:"rgb(69, 69, 69)" }}>
      Master Your Expenses<br/>
      <span style={{ display: "inline-block", height: "75px", overflow: "hidden", verticalAlign: "top" }}>
        <span
          key={words[index]}
          style={{
            display: "inline-block",
            minWidth: "100px", // Ensures proper alignment
            textAlign: "left",
            position: "relative",
            animation: "fall 0.5s ease-in-out",
            color: "#007bff",
            fontWeight: "500",
          }}
          className="moving-head"
        >
          {words[index]}
        </span>
      </span>{" "}
      with Ease.
      <style>
        {`
          @keyframes fall {
            0% {
              opacity: 0;
              transform: translateY(-100%);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
        <p style={{marginTop:"60px", fontSize:"24px", color:"rgb(110, 110, 110)", fontWeight:"500"}}>Track your spending, own your money</p>
      </div>
      <div>
     
<VideoPlayer/>
 
      
      </div>
      </div>
      <ExpensesInput isLoggedIn={isLoggedIn} userEmail={userEmail}/>

      <div className="initial">
        <div>
        <h2>This Week Graph</h2>
        <p id="week-range"></p>
        </div>
     <div className="graphs">
     <div className="card-graph">

     <canvas id="expenseChart" ref={expenseChartRef} style={{width:"700px"}}></canvas>


       </div>
       <br />
       <div className="card-sugg">
       <div className="card">
           <canvas id="barChart" ref={barChartRef}></canvas>
         </div>
       <div>
     </div>
        
      </div>

        </div>
      </div>

      <br />


      <div className="final">
      <StoryBoard/>


      <div className="future">
    
        <div className="prediction-container" onClick={getFutureSpending}>
          <div className="glowing-sphere">
            <div className="gas-layer"></div>
            <div className="sparkle-layer"></div>
            <div className="wave-layer"></div>
            <p className="predict-text">Predict Future</p>
          </div>
        </div>
        <canvas id="predictionGraph" ref={predictionGraphRef} style={{ display: "none" }}></canvas>
      </div>
      </div>
          
    
      
    </div>
  );
};

export default PersonalFinanceTracker;
