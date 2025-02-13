import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Top Navbar
import HamburgerMenu from "./components/HamburgerMenu"; // Mobile Navbar
import Dashboard from "./components/Dashboard";
import SubscriptionTracker from "./components/SubscriptionTracker";
import PersonalFinanceTracker from "./components/CreditScore";
import NewsInsights from "./components/NewsInsights";
import Login from "./components/Login";
import CustomGoal from "./components/CustomGoal";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userEmail, setUserEmail] = useState("user1@example.com");

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail(""); // Clear email on logout
  };

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  return (
    <Router>
      <InnerApp 
        isLoggedIn={isLoggedIn} 
        handleLogin={handleLogin} 
        handleLogout={handleLogout} 
        userEmail={userEmail} 
      />
    </Router>
  );
};

const InnerApp = ({ isLoggedIn, handleLogin, handleLogout, userEmail }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app-container">
      {/* Top Navbar for all pages */}
      {isMobile ? (
        <HamburgerMenu isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      ) : (
        <Navbar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      )}

      {/* Content Section */}
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Dashboard isLoggedIn={isLoggedIn} userEmail={userEmail} />} />
          <Route path="/subscription-tracker" element={<SubscriptionTracker isLoggedIn={isLoggedIn} userEmail={userEmail} />} />
          <Route path="/credit-score" element={<PersonalFinanceTracker isLoggedIn={isLoggedIn} userEmail={userEmail}/>} />
          <Route path="/news-insights" element={<NewsInsights userEmail={userEmail} />} />
          <Route path="/login" element={<Login setUser={handleLogin} />} />
          <Route path="/custom-goal" element={<CustomGoal isLoggedIn={isLoggedIn} userEmail={userEmail}/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
