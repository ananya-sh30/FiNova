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
      
        <NavLink to="/game"><button className="game-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
	<g fill="#e8a700">
		<path d="M240 132c0 19.88-35.82 36-80 36c-19.6 0-37.56-3.17-51.47-8.44C146.76 156.85 176 142 176 124V96.72c36.52 3.34 64 17.86 64 35.28m-64-48c0-19.88-35.82-36-80-36S16 64.12 16 84s35.82 36 80 36s80-16.12 80-36" opacity="0.2" />
		<path d="M184 89.57V84c0-25.08-37.83-44-88-44S8 58.92 8 84v40c0 20.89 26.25 37.49 64 42.46V172c0 25.08 37.83 44 88 44s88-18.92 88-44v-40c0-20.7-25.42-37.32-64-42.43M232 132c0 13.22-30.79 28-72 28c-3.73 0-7.43-.13-11.08-.37C170.49 151.77 184 139 184 124v-18.26c29.87 4.45 48 16.53 48 26.26M72 150.25v-23.79A184 184 0 0 0 96 128a184 184 0 0 0 24-1.54v23.79A163 163 0 0 1 96 152a163 163 0 0 1-24-1.75m96-40.32V124c0 8.39-12.41 17.4-32 22.87V123.5c12.91-3.13 23.84-7.79 32-13.57M96 56c41.21 0 72 14.78 72 28s-30.79 28-72 28s-72-14.78-72-28s30.79-28 72-28m-72 68v-14.07c8.16 5.78 19.09 10.44 32 13.57v23.37C36.41 141.4 24 132.39 24 124m64 48v-4.17c2.63.1 5.29.17 8 .17c3.88 0 7.67-.13 11.39-.35a122 122 0 0 0 12.61 3.76v23.46c-19.59-5.47-32-14.48-32-22.87m48 26.25V174.4a179.5 179.5 0 0 0 24 1.6a184 184 0 0 0 24-1.54v23.79a165.5 165.5 0 0 1-48 0m64-3.38V171.5c12.91-3.13 23.84-7.79 32-13.57V172c0 8.39-12.41 17.4-32 22.87" />
	</g>
</svg> </button></NavLink>

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
