import React, { useState } from "react";
import { CreditCard, Bell, Calendar, DollarSign, AlertCircle } from "lucide-react";

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      message: "Your Netflix subscription is due tomorrow!",
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="none" stroke="#2b6ce3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12c0-3.537 0-5.306 1.053-6.487q.253-.284.554-.522C4.862 4 6.741 4 10.5 4h3c3.759 0 5.638 0 6.892.99q.302.24.555.523C22 6.693 22 8.463 22 12s0 5.306-1.053 6.487a4.4 4.4 0 0 1-.555.522C19.138 20 17.26 20 13.5 20h-3c-3.759 0-5.638 0-6.893-.99a4.4 4.4 0 0 1-.554-.523C2 17.307 2 15.537 2 12m8 4h1.5m3 0H18M2 9h20" color="#2b6ce3" />
    </svg>,
      isActive: true,
    },
    {
      id: 2,
      message: "A new budget-friendly plan is available for Spotify.",
      icon: <Bell size={20} />, // Represents notifications
      isActive: false,
    },
    
    {
      id: 4,
      message: "Your Disney+ annual payment of $79.99 is due next week.",
      icon: <DollarSign size={20} />, // Represents payment reminders
      isActive: true,
    },
    {
      id: 5,
      message: "You have overlapping subscriptions. Consider optimizing them.",
      icon: <AlertCircle size={20} />, // Represents a warning
      isActive: true,
    },
  ]);

  const toggleAlertStatus = (id) => {
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === id ? { ...alert, isActive: !alert.isActive } : alert
      )
    );
  };

  return (
    <div className="alerts">
      <ul>
        {alerts.map((alert) => (
          <li
            key={alert.id}
            className={`alert-item ${alert.isActive ? "active" : "inactive"}`}
          >
            <div className="alert-icon">{alert.icon}</div>
            <span className="alert-message">{alert.message}</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={alert.isActive}
                onChange={() => toggleAlertStatus(alert.id)}
              />
              <span className="slider"></span>
            </label>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .alerts {
         
          margin: 20px;
        }
        .alerts ul {
          list-style-type: none;
          padding: 0;
          font-weight:500;
        }
        .alert-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 10px 0;
          padding: 10px;
          border-bottom:2px solid rgb(232, 232, 232);
          padding-bottom:20px;
          background-color:rgb(255, 255, 255);
        }
       
        .alert-icon {
          margin-right: 10px;
          background-color:rgb(247, 247, 247);
          padding:11px;
          border-radius:30px;
         
         
        }
        .alert-message {
          flex-grow: 1;
          font-size: 14px;
        }
        .switch {
          position: relative;
          display: inline-block;
          width: 34px;
          height: 20px;
        }
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.4s;
          border-radius: 34px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 14px;
          width: 14px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color:rgb(62, 115, 219);
        }
        input:checked + .slider:before {
          transform: translateX(14px);
        }
      `}</style>
    </div>
  );
};

export default Alerts;
