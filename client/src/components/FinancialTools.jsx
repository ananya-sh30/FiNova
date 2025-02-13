import React, { useState } from "react";
import InsuranceNeedsCalculator from "./InsuranceNeedsCalculator";
import EmergencyFundCalculator from "./EmergencyFundCalculator";
import NetWorthCalculator from "./NetWorthCalculator";
import "../styles/FinancialTools.css";

const FinancialTools = () => {
  const [showInsuranceModal, setShowInsuranceModal] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [showNetWorthModal, setShowNetWorthModal] = useState(false);

  return (
    <div className="finance-tools">
      <h1>Your All-in-One Financial Toolkit</h1>
      <p>Know Your Worth, Secure Your Future, Be Financially Ready</p>
      <div className="financial-tools-container">
        
        <div className="calculator-card" onClick={() => setShowInsuranceModal(true)}>
            <div  style={{display:"flex", alignItems:"flex-end", justifyContent:"right", width:"98%"}}>
            <button className="calculator-button">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <path d="M5 19l14-14M19 5h-6M19 5v6" />
            </svg>
            </button>

            </div>
       <div>
       <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
            <g fill="none" stroke="#1742da" stroke-width="1.5">
                <path d="m3 11l9-3l9 3m-9-9v19.5" />
                <path stroke-linecap="round" d="M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994m3-2.629c1.163-1.476 2-3.408 2-5.913v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082C3 5.62 3 7.22 3 10.417V11" />
            </g>
        </svg>
        
          <h2 className="calculator-title">Insurance Needs Calculator</h2>
          <p>Determine the right amount of insurance to protect your loved ones and secure your financial future.</p>
       </div>
       
         
        </div>

        <div className="calculator-card" onClick={() => setShowEmergencyModal(true)}>
            <div  style={{display:"flex", alignItems:"flex-end", justifyContent:"right", width:"98%"}}>
            <button className="calculator-button">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <path d="M5 19l14-14M19 5h-6M19 5v6" />
            </svg>
            </button>            </div>
      <div>
      <h2 className="calculator-title">Emergency Fund Calculator</h2>
          <p>Calculate how much savings you need for unexpected expenses and build a strong financial safety net.</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 1024 1024">
            <path fill="#1742da" fill-opacity="0.15" d="M340 585c0-5.5 4.5-10 10-10h44c5.5 0 10 4.5 10 10v171h355V563c0-136.4-110.6-247-247-247S265 426.6 265 563v193h75z" />
            <path fill="#1742da" d="m216.9 310.5l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3l-67.9-67.9a8.03 8.03 0 0 0-11.3 0l-39.6 39.6a8.03 8.03 0 0 0 0 11.3l67.9 67.9c3.1 3.1 8.1 3.1 11.3 0m669.6-79.2l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-67.9 67.9a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l67.9-67.9c3.1-3.2 3.1-8.2 0-11.3M484 180h56c4.4 0 8-3.6 8-8V76c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8m348 712H192c-17.7 0-32 14.3-32 32v24c0 4.4 3.6 8 8 8h688c4.4 0 8-3.6 8-8v-24c0-17.7-14.3-32-32-32m-639-96c0 17.7 14.3 32 32 32h574c17.7 0 32-14.3 32-32V563c0-176.2-142.8-319-319-319S193 386.8 193 563zm72-233c0-136.4 110.6-247 247-247s247 110.6 247 247v193H404V585c0-5.5-4.5-10-10-10h-44c-5.5 0-10 4.5-10 10v171h-75z" />
        </svg>
         
      </div>
          
        </div>

        <div className="calculator-card" onClick={() => setShowNetWorthModal(true)}>
            <div style={{display:"flex", alignItems:"flex-end", justifyContent:"right", width:"98%"}}>
            <button className="calculator-button">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <path d="M5 19l14-14M19 5h-6M19 5v6" />
            </svg>
            </button>            </div>
       <div>
       <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
        <g fill="none" stroke="#1742da" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 9h4" opacity="0.5" />
            <path stroke-width="1.5" d="M20.833 10h-2.602C16.446 10 15 11.343 15 13s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148c-.036-.501-.465-.9-1.005-.933c-.035-.002-.076-.002-.16-.002Z" />
            <path stroke-width="1.5" d="M20.965 10c-.078-1.872-.328-3.02-1.137-3.828C18.657 5 16.771 5 13 5h-3C6.229 5 4.343 5 3.172 6.172S2 9.229 2 13s0 5.657 1.172 6.828S6.229 21 10 21h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828" />
            <path stroke-linecap="round" stroke-width="1.5" d="m6 5l3.735-2.477a3.24 3.24 0 0 1 3.53 0L17 5" opacity="0.5" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M17.991 13H18" opacity="0.5" />
        </g>
    </svg>
          <h2 className="calculator-title">Net Worth Calculator</h2>
          <p>Assess your financial health by calculating your total assets and liabilities.</p>
         
       </div>
        
        </div>
      </div>

      {showInsuranceModal && (
        <InsuranceNeedsCalculator onClose={() => setShowInsuranceModal(false)} />
      )}
      {showEmergencyModal && (
        <EmergencyFundCalculator onClose={() => setShowEmergencyModal(false)} />
      )}
      {showNetWorthModal && (
        <NetWorthCalculator onClose={() => setShowNetWorthModal(false)} />
      )}
    </div>
  );
};

export default FinancialTools;
