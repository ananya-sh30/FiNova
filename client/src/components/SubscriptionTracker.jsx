import React, { useState, useEffect } from "react";
import axios from "axios";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

import SubscriptionExpenseChart from "./SubscriptionExpenseChart";

import SubscriptionBudgetChart from "./SubsChart";
import SubBar from "./SubBar";
import Alerts from "./Alerts"
import SubCarousel from "./SubCarousel";

import 'react-circular-progressbar/dist/styles.css';

import "../styles/SubscriptionTracker.css";


const CustomLegend = (props) => {
  const { payload } = props;

  // Manually define the colors matching the gradients
  const colorMapping = {
    Entertainment: "rgba(0, 33, 244, 0.89)",
    Productivity: "rgba(48, 48, 48, 0.9)",
    Others: "rgba(230, 230, 230, 1)",
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", color: "gray", fontSize: "12px", lineHeight: "1.5", marginTop:"20px", justifyContent:"center"}}>
      {payload.map((entry, index) => (
        <div key={`legend-${index}`} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: colorMapping[entry.value] || "gray", marginRight: "8px", marginLeft: "10px" }}></div>
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};
const categories = ["Entertainment", "Music", "Fitness", "Reading"];
const subscriptionHours = [
  { name: 'Netflix', cost: 12, usageHours: 50 },
  { name: 'Spotify', cost: 10, usageHours: 100 },
  { name: 'Amazon Prime', cost: 15, usageHours: 30 },
];

const subscriptionCategories = {
  Entertainment: ["Netflix", "Amazon Prime", "YouTube", "Apple TV+", "Spotify"],
  Music: ["Spotify"],
  Fitness: ["Duolingo"],
  Reading: ["Goodreads", "Microsoft 365"],
};

const SubscriptionTracker = ({ isLoggedIn, userEmail }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("Entertainment");

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_NODE_BACKEND_URL}/api/subscriptions/${userEmail}`
        );
        setSubscriptions(res.data);
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    };

    if (userEmail) {
      fetchSubscriptions();
    }
  }, [userEmail]);

  const filteredSubscriptions = subscriptions.filter((sub) =>
    subscriptionCategories[filteredCategory].includes(sub.subscription_name)
  );

 
  return (
  <div className="subs">
     <div className="highlight">
     <SubCarousel
      filteredSubscriptions={filteredSubscriptions}
      categories={categories}
      filteredCategory={filteredCategory}
      setFilteredCategory={setFilteredCategory}
     />
     </div>
   <div className="trend-alert">
   <div className="monthly-trend">
  
  {/* Header Section */}
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
    <span style={{ fontWeight: "bold", color: "black", fontSize:"40px" }}>$1,250</span><span style={{ fontWeight: "500", color: "rgb(44, 95, 225)", fontSize:"15px" }}> /Month</span>
  </div>

  </div>
  {/* Graph Section */}
  <div style={{ width: "100%", height: "75%", display: "flex", alignItems: "center", justifyContent:"flex-start"}}>
  <SubscriptionExpenseChart/>

</div>

     </div>


     <div className="alerts-side">
    <Alerts/>
 

     </div>
   </div>
    
     <div className="uti-graph">
     <div className="uti-graph-head">
     <div
          style={{
            width: "80px",
            height: "80px",
            marginRight: "12px",
            borderRadius: "60px",
            backgroundColor: "rgb(255, 255, 255)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
          <path fill="#2b6ce3" d="M20.172 6.75h-1.861l-4.566 4.564a1.874 1.874 0 1 1-1.06-1.06l4.565-4.565V3.828a.94.94 0 0 1 .275-.664l1.73-1.73a.25.25 0 0 1 .25-.063c.089.026.155.1.173.191l.46 2.301l2.3.46c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.731 1.73a.94.94 0 0 1-.663.275" />
          <path fill="#2b6ce3" d="M2.625 12A9.375 9.375 0 0 0 12 21.375A9.375 9.375 0 0 0 21.375 12c0-.898-.126-1.766-.361-2.587A.75.75 0 0 1 22.455 9c.274.954.42 1.96.42 3c0 6.006-4.869 10.875-10.875 10.875S1.125 18.006 1.125 12S5.994 1.125 12 1.125c1.015-.001 2.024.14 3 .419a.75.75 0 1 1-.413 1.442A9.4 9.4 0 0 0 12 2.625A9.375 9.375 0 0 0 2.625 12" />
          <path fill="#2b6ce3" d="M7.125 12a4.874 4.874 0 1 0 9.717-.569a.748.748 0 0 1 1.047-.798c.251.112.42.351.442.625a6.373 6.373 0 0 1-10.836 5.253a6.376 6.376 0 0 1 5.236-10.844a.75.75 0 1 1-.17 1.49A4.876 4.876 0 0 0 7.125 12" />
        </svg>
        </div>
        <div>
          <p style={{ fontSize: "33px", fontWeight: "600", color: "black", marginTop: "7px" }}>
            Budget Utilisation
          </p>
         
        </div>
        <div style={{ padding: "0px 20px", display: "flex", flexDirection: "row",justifyContent:"space-between",alignItems:"center", marginBottom:"5px", width:"100%" }}>
      <span style={{fontSize:"30px", fontWeight:"bold"}}>88%</span>
      <div style={{padding:"7px", borderRadius:"20px", backgroundColor: "rgba(153, 223, 159, 0.19)", fontSize:"13px", fontWeight:"500"}}>+3 from previous month</div>
    </div>
    <div style={{margin:"0px 20px"}}>
    <SubBar subscriptions={subscriptionHours} />
    </div>
        </div>
     <div style={{width:"40%"}}> 
     <span style={{ fontSize: "27px", fontWeight: "700", color: "black", marginTop: "7px" }}>
            Rs.1,010.<span style={{ color: "rgb(179, 179, 179)" }}>00</span>
          </span>
        <SubscriptionBudgetChart/>

        </div>
     </div>
    
  </div>
);

};

export default SubscriptionTracker;
