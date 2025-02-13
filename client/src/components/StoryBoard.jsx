import { useState, useEffect } from "react";
import "../styles/StoryBoard.css";

const animations = [
  "animate-left",
  "animate-right",
  "animate-circle",
  "animate-floating",
  "animate-bottom",
  "animate-fade"
];

const cardsData = [
  { amount: "₹10,000", detail: "on Food and Beverages", className: "storycard1" },
  { amount: "₹10,000", detail: "on Transport", className: "storycard2" },
  { amount: "₹10,000", detail: "on Housing & Utilities", className: "storycard3" },
  { amount: "₹5,000", detail: "on Entertainment", className: "storycard4" },
  { amount: "₹7,000", detail: "on Health", className: "storycard5" },
  { amount: "₹3,500", detail: "on Miscellaneous", className: "storycard6" }
];

export default function StoryBoard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="story-container">
   
    
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`story-card ${card.className} ${index === currentIndex ? "active" : ""}`}
          >
            <div className="bg-circles">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`circle c${i + 1}`}></div>
              ))}
            </div>
            <div className={`animated-text ${animations[currentIndex]}`}> 
              <span className="number">{card.amount}</span>
              <span className="detail">{card.detail}</span>
            </div>
          </div>
        ))}
      </div>
   
  );
}
