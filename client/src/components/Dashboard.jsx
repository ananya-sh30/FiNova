import React, { useState } from "react";
import "../styles/App.css";
import { motion } from "framer-motion";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../styles/Dashboard.css";
import SmartFinance from "./SmartFinance";
import FinancialTools from "./FinancialTools";
import InvestmentAdvisor from "./InvestmentAdvisor";
import FAQ from "./FAQ";
import Footer from "./Footer";
const data = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 15 },
  { name: "Mar", value: 12 },
  { name: "Apr", value: 18 },
  
];

const Dashboard = ({isLoggedIn, userEmail}) => {
  const [progress, setProgress] = useState(50);

  return (
    <div className="maindash">
     
    <div className="dashboard">
    
      <div className="circles">
        <div className="half-circle-4"></div>
        <div className="half-circle-3"></div>
        <div className="half-circle-2"></div>
        <div className="half-circle-1"></div>
        <div className="half-circle-0"></div>
      </div>
      <header>
        <div className="middleGrid">
          <div className="box1"></div>
          <div className="box3">
            <h1>
              <span className="head1">Unlock the </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
                <path fill="#a7ff00" d="M11 15H6l7-14v8h5l-7 14z" />
              </svg>
              <span className="head2"> Future of</span> <br />
              <span className="head3">Personal Finance with </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
                <circle cx="12" cy="20" r="2" fill="#a7ff00" />
                <circle cx="12" cy="4" r="2" fill="#a7ff00" />
                <circle cx="6.343" cy="17.657" r="2" fill="#a7ff00" />
                <circle cx="17.657" cy="6.343" r="2" fill="#a7ff00" />
                <circle cx="4" cy="12" r="2.001" fill="#a7ff00" />
                <circle cx="20" cy="12" r="2" fill="#a7ff00" />
                <circle cx="6.343" cy="6.344" r="2" fill="#a7ff00" />
                <circle cx="17.657" cy="17.658" r="2" fill="#a7ff00" />
              </svg>
              <span className="name"> FiNova</span>
            </h1>
            <p>Smart Investing, Budgeting, and Expense Monitoring at Your Fingertips</p>
            <div className="get-started-container">
              <input type="email" className="email-input" placeholder="Write your email" />
              <button className="get-started">Get Started</button>
            </div>
          </div>
          <div className="box2"></div>
        </div>
      </header>

      <div className="metric-cards">
        <div className="metric-card card1">
        <div className="card1-left">
        <div className="arrow">
        +6
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="#a7ff00" fill-rule="evenodd" clip-rule="evenodd"><g opacity="0.2"><path d="M6.848 9.794A1.5 1.5 0 0 1 7.04 7.68l4-3.333a1.5 1.5 0 0 1 1.92 2.304l-4 3.334a1.5 1.5 0 0 1-2.112-.192"/><path d="M17.152 9.794a1.5 1.5 0 0 1-2.112.192l-4-3.334a1.5 1.5 0 1 1 1.92-2.304l4 3.333a1.5 1.5 0 0 1 .192 2.113"/><path d="M12 6a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-3 0v-8A1.5 1.5 0 0 1 12 6"/></g><path d="M5.616 8.653a.5.5 0 0 1 .064-.704l4-3.333a.5.5 0 1 1 .64.768l-4 3.333a.5.5 0 0 1-.704-.064"/><path d="M14.384 8.653a.5.5 0 0 1-.704.064l-4-3.333a.5.5 0 1 1 .64-.768l4 3.333a.5.5 0 0 1 .064.704"/><path d="M10 5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-1 0V5.5A.5.5 0 0 1 10 5"/></g></svg>
        </div>
          <p className="metric-title">{progress}<span style={{ color: "grey" }}>%</span></p>
          </div>
          <div className="card1-right">
          <p className="metric-subtitle">Increase Level</p>
          <input type="range" min="0" max="100" value={progress} onChange={(e) => setProgress(e.target.value)} />
          </div>
        </div>
        <div className="metric-card card2">
         
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#a7ff00" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6-4.5c0 .414.336.75.75.75h1.5c.6 0 1.012.24 1.29.587c.154.193.274.43.352.69H9a.75.75 0 1 0 0 1.5h3.142a2 2 0 0 1-.352.692c-.278.347-.69.587-1.29.587H9a.75.75 0 0 0-.542 1.268l4.25 4.444a.75.75 0 0 0 1.084-1.036l-3.045-3.185a3.03 3.03 0 0 0 2.214-1.141a3.65 3.65 0 0 0 .721-1.628H15a.75.75 0 0 0 0-1.5h-1.318a3.8 3.8 0 0 0-.476-1.278H15a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0-.75.75"/></svg>
        </div>
        <div className="metric-card card3">
            <div style={{ display:"flex", flexDirection:"row", alignItems:"center", marginTop:"5px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#a7ff00" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 15h2a1.5 1.5 0 0 0 0-3h-2V9h3.5M3 12v.01M21 12v.01M12 21v.01M7.5 4.2v.01m9 15.59v.01m-9-.01v.01M4.2 16.5v.01m15.6-.01v.01m0-9.01v.01M4.2 7.5v.01m12.3-3.304A9.04 9.04 0 0 0 12 3"/></svg>
          <p className="metric-subtitle" style={{ marginTop:"0%", marginLeft:"2px" }}> Years Expected Growth</p>
          </div>
          <ResponsiveContainer width="100%" height={60}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a7ff00" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#a7ff00" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#a7ff00" fillOpacity={1} fill="url(#colorUv)" />
              {data.map((point, index) => (
                <text
                  key={index}
                  x={index * 50 + 10} 
                  y={80 - point.value * 2} 
                  fill="#fff"
                  fontSize={12}
                  textAnchor="middle"
                >
                  {point.value}
                </text>
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="metric-card card4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#a7ff00" d="m6 16.5l-3 2.94V11h3m5 3.66l-1.57-1.34L8 14.64V7h3m5 6l-3 3V3h3m2.81 9.81L17 11h5v5l-1.79-1.79L13 21.36l-3.47-3.02L5.75 22H3l6.47-6.34L13 18.64"/></svg>        </div>
      </div>
    </div>
    <FinancialTools />

    <SmartFinance />
    <div className="advisor-head">
    <h2 className="form-heading">Get Smart Investment Advice</h2>
    <p>Invest with Purpose, Grow with Confidence</p>
    </div>
     
   <InvestmentAdvisor/>
   <FAQ/>
   <Footer/>
    </div>

    

  );
};

export default Dashboard;
