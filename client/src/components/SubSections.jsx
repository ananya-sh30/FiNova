import React, { useState } from "react";
import SubscriptionExpenseChart from "./SubscriptionExpenseChart";
import SubscriptionBudgetPieChart from "./SubsChart";
import SubBar from "./SubBar";

import netflixLogo from "../assets/netflix.png";
import primeLogo from "../assets/prime.png";
import spotifyLogo from "../assets/spotfiy.png";
import youtubeLogo from "../assets/youtube.png";
import duolingoLogo from "../assets/duolingo.png";
import appletvLogo from "../assets/apple.png";
import microLogo from "../assets/microsoft.png";
import goodreadsLogo from "../assets/goodreads.png";
import hboLogo from "../assets/hbo.png";

const subscriptionHours = [
    { name: 'Netflix', cost: 12, usageHours: 50 },
    { name: 'Spotify', cost: 10, usageHours: 100 },
    { name: 'Amazon Prime', cost: 15, usageHours: 30 },
  ];

  
export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("expense");
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      name: "Subscription Expiry",
      urgency: "High",
      image: duolingoLogo, // Replace with actual image path
      active: true,
    },
    {
      id: 2,
      name: "Overdue Payment",
      urgency: "Medium",
      image: appletvLogo, // Replace with actual image path
      active: false,
    },
    {
      id: 3,
      name: "Budget Limit Approaching",
      urgency: "Low",
      image: microLogo, // Replace with actual image path
      active: true,
    },
    {
      id: 4,
      name: "New Plan Recommendations Available",
      urgency: "Low",
      image: spotifyLogo, // Replace with actual image path
      active: false,
    },
    {
      id: 5,
      name: "Free Trial Ending Soon",
      urgency: "High",
      image: goodreadsLogo, // Replace with actual image path
      active: true,
    },
    {
      id: 6,
      name: "Payment Method Expiration",
      urgency: "Medium",
      image: netflixLogo, // Replace with actual image path
      active: true,
    },
    {
      id: 7,
      name: "Promotional Offer Expiring",
      urgency: "Medium",
      image: primeLogo, // Replace with actual image path
      active: false,
    },
    {
      id: 8,
      name: "Multiple Accounts Detected",
      urgency: "High",
      image: youtubeLogo, // Replace with actual image path
      active: false,
    },
    {
      id: 9,
      name: "Unusual Login Activity",
      urgency: "High",
      image: hboLogo, // Replace with actual image path
      active: true,
    },
    
  ]);
  
  
  const toggleAlert = (id) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, active: !alert.active } : alert
      )
    );
  };

  return (
    <div
  className="division"
  style={{
    display: "grid",
    gridTemplateColumns: "2fr 1fr", // Default layout for larger screens
    gap: "16px",
    padding: "16px",
  }}
>
  <style>
    {`
      @media (max-width: 768px) {
        .division {
          grid-template-columns: 1fr; /* Switch to a single-column layout */
        }
      }
    `}
  </style>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "16px",
        }}
      >
       {/* Navigation Bar */}
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    borderBottom: "2px solid #007bff",
    paddingBottom: "8px",
    
   
    padding: "12px 16px", // Adds padding to the nav container
  }}
>
  {["expense", "insights", "budget"].map((section) => (
    <button
      key={section}
      onClick={() => setActiveSection(section)}
      style={{
        cursor: "pointer",
        fontSize: "0.8rem",
        fontWeight: activeSection === section ? "600" : "normal", // Bold for active section
        color: activeSection === section ? "#007bff" : "#555", // Active color: blue, inactive: gray
        background: "none",
        border: "none",
        padding: "8px 16px",
        borderRadius: "8px",
        transition: "all 0.3s ease", // Smooth transition for hover and active states
        boxShadow:
          activeSection === section
            ? "0 2px 4px rgba(0, 123, 255, 0.3)" // Highlight shadow for active
            : "none",
      }}
      onMouseEnter={(e) => {
        e.target.style.color = "#0056b3"; // Darker blue on hover
      }}
      onMouseLeave={(e) => {
        e.target.style.color =
          activeSection === section ? "#007bff" : "#555"; // Reset to active or inactive state
      }}
    >
      {section === "expense"
        ? "Expense Trends"
        : section === "insights"
        ? "Insights"
        : "Budget Utilisation"}
    </button>
  ))}
</div>


        {/* Content Sections */}
        {activeSection === "insights" && (
          <div>
            <div class="sub-metrics">
                    <div class="metric">
                        <div class="metric-header">
                        <h3>Unused Subscriptions</h3>
                        <span class="metric-icon">💰</span>
                        </div>
                        <p class="metric-number">₹2,150</p>
                        <p class="metric-change">+15% from last month</p>
                        <p class="metric-description">You’ve cut unnecessary costs effectively. Keep it up!</p>
                        <div class="metric-tip">
                        <p><strong>Tip:</strong> Regularly review subscriptions every quarter to maximize these savings.</p>
                        </div>
                    </div>
                    <div class="metric">
                        <div class="metric-header">
                        <h3>Subscriptions Optimized</h3>
                        <span class="metric-icon">📦</span>
                        </div>
                        <p class="metric-number">4 subscriptions</p>
                        <p class="metric-change">+1 from last month</p>
                        <p class="metric-description">Switching to bundles and annual plans saved money!</p>
                        <div class="metric-insight">
                        <blockquote>
                            "Bundling services and choosing annual plans can reduce costs by up to 20% annually."
                        </blockquote>
                        </div>
                    </div>
                    <div class="metric">
                        <div class="metric-header">
                        <h3>Auto-Renewals Avoided</h3>
                        <span class="metric-icon">🔔</span>
                        </div>
                        <p class="metric-number">90%</p>
                        <p class="metric-change">+7% from last month</p>
                        <p class="metric-description">You’re staying ahead of unexpected charges—great job!</p>
                       
                    </div>
                    <div class="metric">
                        <div class="metric-header">
                        <h3>Subscription Expense Reduced</h3>
                        <span class="metric-icon">📉</span>
                        </div>
                        <p class="metric-number">₹3,200</p>
                        <p class="metric-change">-₹350 from last month</p>
                        <p class="metric-description">Your spending is getting optimized each month!</p>
                        <div class="metric-progress">
                        <p><strong>Progress:</strong> You’re now 70% towards your annual goal of cutting ₹12,000 in subscription expenses.</p>
                        </div>
                    </div>
                    <div class="metric-summary">
                        <h3>Monthly Insights</h3>
                        <ul>
                        <li>Overall savings trend is improving by <strong>12% month-over-month</strong>.</li>
                        <li>Highest savings were seen in <em>streaming and entertainment services.</em></li>
                        <li>Potential areas to optimize further: <strong>Software tools and premium memberships.</strong></li>
                        </ul>
                    </div>
                    </div>

          </div>
        )}
        {activeSection === "budget" && (
         <div className="budget-section">
         <div className="subscriptions-bar">
           <SubBar subscriptions={subscriptionHours} />
         </div>
         <div className="pie-chart-container">
           <SubscriptionBudgetPieChart />
         </div>
       </div>
       
        )}
        {activeSection === "expense" && (
          <div>
           <div className="monthly-trend">
  
  
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
    
    {/* Logo & Heading */}
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ width: "35px", height: "35px", marginRight: "12px", borderRadius:"60px", backgroundColor:"rgba(153, 223, 159, 0.19)", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256"><path fill="rgba(3, 85, 47, 0.87)" d="M240 56v64a8 8 0 0 1-16 0V75.31l-82.34 82.35a8 8 0 0 1-11.32 0L96 123.31l-66.34 66.35a8 8 0 0 1-11.32-11.32l72-72a8 8 0 0 1 11.32 0L136 140.69L212.69 64H168a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"/></svg>
      </div>
      <div>
        <p style={{ fontSize: "17px", fontWeight: "500", margin: "0" }}>
         Subscription Expense Trends
        </p>
      </div>
    </div>

   
 <div style={{ display: "flex", justifyContent: "flex-end"}}>
    
    {/* Best Value */}
    <div style={{ display: "flex", alignItems: "center",justifyContent:"center",  marginRight: "24px", backgroundColor:"rgba(153, 223, 159, 0.19)", border:"none", borderRadius:"20px", padding:"5px 8px" }}>
      <span style={{ fontSize: "20px", marginRight: "8px",  display: "flex", alignItems: "center"}}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 256 256"><path fill="#1ed760" d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128c70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644c-30.053-18.357-67.885-22.515-112.44-12.335a7.98 7.98 0 0 1-9.552-6.007a7.97 7.97 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276c3.76 2.308 4.952 7.215 2.644 10.975m15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289c-34.406-21.148-86.853-27.273-127.548-14.92c-5.278 1.594-10.852-1.38-12.454-6.649c-1.59-5.278 1.386-10.842 6.655-12.446c46.485-14.106 104.275-7.273 143.787 17.007c4.692 2.89 6.175 9.034 3.286 13.72zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978c-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405c-3.362 5.69-10.73 7.565-16.4 4.187z"/></svg></span>
      <p style={{ fontSize: "12px", fontWeight: "500", color: "rgba(4, 60, 27, 0.9)", margin: 0 }}>
        Best Value Subscription
      </p>
    </div>

    <div style={{ display: "flex", alignItems: "center",justifyContent:"center",  marginRight: "24px", backgroundColor:"rgba(255, 194, 194, 0.66)", border:"none", borderRadius:"20px", padding:"5px 8px" }}>
      <span style={{ fontSize: "20px", marginRight: "8px",  display: "flex", alignItems: "center"}}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="15" viewBox="0 0 512 138"><path fill="#db202c" d="M340.657 0v100.203q18.54.861 36.98 2.09v21.245a1822 1822 0 0 0-58.542-2.959V0zM512 .012l-28.077 65.094l28.07 72.438l-.031.013a1789 1789 0 0 0-24.576-3.323l-15.763-40.656l-15.913 36.882a1816 1816 0 0 0-22.662-2.36l27.371-63.43L435.352.013h23.325l14.035 36.184L488.318.012zM245.093 119.526V.011h60.19v21.436h-38.628v27.78h29.227v21.245h-29.227v49.05zM164.58 21.448V.01h66.69v21.437h-22.565v98.66c-7.197.19-14.386.412-21.56.683V21.448zM90.868 126.966V.014h59.89v21.435h-38.331v29.036c8.806-.113 21.327-.24 29.117-.222V71.51c-9.751-.12-20.758.134-29.117.217v32.164a1848 1848 0 0 1 38.331-2.62v21.247a1816 1816 0 0 0-59.89 4.45M48.571 77.854L48.57.01h21.562v128.96q-11.823 1.216-23.603 2.584L21.56 59.824v74.802q-10.8 1.406-21.56 2.936V.012h20.491zm346.854 46.965V.012h21.563V126.6c-7.179-.64-14.364-1.23-21.563-1.78"/></svg></span>
      <p style={{ fontSize: "12px", fontWeight: "500", color: "rgba(201, 52, 15, 0.99)", margin: 0 }}>
        Least Value Subscription
      </p>
    </div>
    </div>
  </div>

 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
  <div style={{ fontSize: "18px", fontWeight: "500", color: "rgba(131, 205, 161, 0.9)", marginBottom: "12px" }}>
    <span style={{ fontWeight: "bold", color: "black", fontSize:"35px" }}>Rs.1,250</span><span style={{ fontWeight: "500", color: "rgb(44, 95, 225)", fontSize:"15px" }}> /Month</span>
  </div>

  </div>
  {/* Graph Section */}
  <div style={{ width: "100%", height: "75%", display: "flex", alignItems: "center", justifyContent:"flex-start"}}>
  <SubscriptionExpenseChart/>

</div>

     </div>


          </div>
        )}
      </div>

      {/* Alerts Section */}
      <div
  style={{
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "24px",
    overflow: "hidden",
  }}
>
 
  <table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead>
      <tr style={{ backgroundColor: "#f5f5f5" }}>
        <th
          style={{
            textAlign: "left",
            padding: "12px",
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "#666",
            borderBottom: "1px solid #ddd",
          }}
        >
          Alert
        </th>
        <th
          style={{
            textAlign: "left",
            padding: "12px",
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "#666",
            borderBottom: "1px solid #ddd",
          }}
        >
          Urgency
        </th>
        <th
          style={{
            textAlign: "right",
            padding: "12px",
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "#666",
            borderBottom: "1px solid #ddd",
          }}
        >
          Remind?
        </th>
      </tr>
    </thead>
    <tbody>
      {alerts.map((alert, index) => (
        <tr
          key={alert.id}
          style={{
            backgroundColor: index % 2 === 0 ? "#ffffff" : "#fafafa",
            transition: "background-color 0.2s ease",
            borderBottom: "1px solid #eee",
          }}
        >
          <td
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px",
              color: "#333",
              fontSize: "0.9rem",
            }}
          >
            <img
          src={alert.image}
          alt={alert.name}
          style={{ width: "24px", height: "24px", borderRadius: "50%" }}
        />
            <span>{alert.name}</span>
          </td>
          <td style={{ padding: "15px" }}>
            <span
              style={{
                padding: "6px 10px",
                fontSize: "0.8rem",
                borderRadius: "15px",
                color: 
                alert.urgency === "High"
                ? "rgba(211, 6, 6, 0.93)"
                : alert.urgency === "Medium"
                ? "rgb(202, 149, 13)"
                : "rgb(13, 152, 59)",
                fontWeight: "500",
               
              }}
            >
              {alert.urgency}
            </span>
          </td>
          <td style={{ padding: "12px", textAlign: "right" }}>
  <div
    onClick={() => toggleAlert(alert.id)}
    style={{
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: alert.active ? "flex-end" : "flex-start",
      width: "40px",
      height: "20px",
      borderRadius: "20px",
      backgroundColor: alert.active ? "#4caf50" : "#ddd",
      padding: "2px",
      position: "relative",
      transition: "background-color 0.3s ease, justify-content 0.3s ease",
    }}
  >
    <div
      style={{
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease",
      }}
    ></div>
  </div>
</td>

        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
}
