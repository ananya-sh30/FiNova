import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/SmartFinance.css";
import { HomeIcon, CarIcon, HeartbeatIcon, RetirementIcon, FutureIcon, EduIcon, TripIcon, JewelIcon } from "./Icons"; // Import your SVGs

const SmartFinance = ({ isLoggedIn, userEmail }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollSpeed = 1; // Adjust speed as needed
      let scrollPos = 0;

      const scroll = () => {
        scrollPos += scrollSpeed;
        if (scrollPos >= carousel.scrollHeight / 2) {
          scrollPos = 0; // Reset to start without visible jump
          carousel.style.transition = "none"; // Disable transition for smooth looping
        } else {
          carousel.style.transition = "transform 0.2s linear";
        }
        carousel.style.transform = `translateY(-${scrollPos}px)`;
        requestAnimationFrame(scroll);
      };

      scroll(); // Start animation loop
    }
  }, []);

  return (
    <div className="smart-finance-container">
      <div className="goal-left-section">
        <h1 className="goal-heading">Smart Personalized<br/> Wealth Growth by FiNova</h1>
        <p className="description">
          Achieve your financial goals with FiNova's personalized investment plans.
          Whether you're saving for a dream house, a new car, medical care, or a
          secure retirement, our goal-based investment solutions are tailored just
          for you.
        </p>
      </div>
      <div className="goal-right-section">
        <div className="carousel-container">
          <div className="carousel" ref={carouselRef}>
            {[...investmentOptions, ...investmentOptions].map((option, index) => (
              <div key={index} className={`goal-card ${index % 2 === 0 ? "even" : "odd"}`}>
                <div className="goal-card-top"  style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                  <div className={`goal-card-icon ${index % 2 === 0 ? "even" : "odd"}`}>
                  {option.icon}
                  </div>
                  <div>
                  <Link to="/custom-goal" className="invest-btn">
                  Invest Now
                </Link>
                  </div>
                </div>
               <div className="goal-card-bottom">
               <h2>{option.title}</h2>
                <p>{option.description}</p>
                
               </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const investmentOptions = [
  { icon: <HomeIcon />, title: "Buy Dream House", description: "Save and invest wisely to own your ideal home." },
  { icon: <CarIcon />, title: "Dream Car", description: "Turn your dream ride into reality with smart financial planning." },
  { icon: <HeartbeatIcon />, title: "Medical Care", description: "Prepare for healthcare needs with secure investments in medical coverage." },
  { icon: <EduIcon />, title: "Education", description: "Invest in quality education for yourself or your loved ones." },
  { icon: <RetirementIcon />, title: "Retirement", description: "Build a strong financial cushion for a stress-free retirement." },
  { icon: <TripIcon />, title: "Plan Your Trip", description: "Save in advance to explore the world without financial worries." },
  { icon: <FutureIcon />, title: "Future Investment", description: "Secure long-term financial stability with strategic investments." },
  { icon: <JewelIcon />, title: "Jewellery", description: "Invest in timeless assets that hold value over time." },
];


export default SmartFinance;
