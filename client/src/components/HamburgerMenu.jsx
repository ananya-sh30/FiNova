import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const HamburgerMenu = ({ isLoggedIn, onLogout }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-menu">
      <button className="hamburger-icon" onClick={() => setOpen(!open)}>
        ☰
      </button>
      {open && (
        <div className="menu">
          <ul>
            <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/subscription-tracker" onClick={() => setOpen(false)}>Subscription Tracker</Link></li>
            <li><Link to="/credit-score" onClick={() => setOpen(false)}>Expense Journal</Link></li>
            <li><Link to="/news-insights" onClick={() => setOpen(false)}>News Insights</Link></li>
            {isLoggedIn && <li><button onClick={() => { onLogout(); setOpen(false); }}>Logout</button></li>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
