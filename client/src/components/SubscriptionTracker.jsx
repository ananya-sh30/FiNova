import React, { useState, useEffect } from "react";
import axios from "axios";



import Alerts from "./Alerts"
import SubCarousel from "./SubCarousel";
import SubSections from "./SubSections";

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
    <SubSections/>
   
    
  </div>
);

};

export default SubscriptionTracker;
