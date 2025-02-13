import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bell, User } from "lucide-react"; // Import icons
import "../styles/Navbar.css";
import brandLogo from "../assets/logo.png";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);

  return (
    <nav className="navbar">
      {/* Left Section: Brand + Navigation Menus */}
      <div className="left-section">
    <img src={brandLogo} alt="logo" />
        <h1 className="brand">FiNova</h1>

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <div className="mainnav">
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/subscription-tracker" activeClassName="active">Subscription Tracker</NavLink></li>
            <li><NavLink to="/credit-score" activeClassName="active">Expense Journal</NavLink></li>
            <li><NavLink to="/news-insights" activeClassName="active">News & Insights</NavLink></li>
          </div>
        </ul>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {isLoggedIn ? (
          <>
      
           

            <div style={{backgroundColor:"black", color: "white", padding:"5px", borderRadius:"20px", width:"26px", height:"26px", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Bell className="nav-icon" size={20} />
         
            </div>
          
            <div className="profile-container">
              <div style={{backgroundColor:"black", color: "white", padding:"5px", borderRadius:"20px", width:"26px", height:"26px", display:"flex", alignItems:"center", justifyContent:"center"}}>
              <User className="nav-icon profile-icon" size={20} onClick={toggleProfileMenu} />
          
              </div>
             
              {profileMenuOpen && (
                <div className="profile-menu">
                  <NavLink to="/profile" className="profile-menu-item">View Profile</NavLink>
                  <button className="profile-menu-item logout-btn" onClick={onLogout}>Logout</button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
    
            <NavLink to="/login"><button className="login-btn">Login</button></NavLink>
            <button className="register-btn">Register</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
