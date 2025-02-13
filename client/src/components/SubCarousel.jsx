import React, { useState, useMemo } from "react";
import { Line } from "react-chartjs-2";
import { useRef } from "react";

import netflixLogo from "../assets/netflix.png";
import primeLogo from "../assets/prime.png";
import spotifyLogo from "../assets/spotfiy.png";
import youtubeLogo from "../assets/youtube.png";
import duolingoLogo from "../assets/duolingo.png";
import appletvLogo from "../assets/apple.png";
import microLogo from "../assets/microsoft.png";
import goodreadsLogo from "../assets/goodreads.png";



const subscriptionColors = {
    Netflix: "#E50914",
    "Amazon Prime": "#0073E6",
    Spotify: "#1DB954",
    YouTube: "#FF0000",
    Duolingo: "#58CC02",
    "Apple TV+": "#A6A6A6",
    "Microsoft 365": "#F25022",
    Goodreads: "#5E3721",
  };
const subscriptionLogos = {
    Netflix: netflixLogo,
    "Amazon Prime": primeLogo,
    Spotify: spotifyLogo,
    YouTube: youtubeLogo,
    Duolingo: duolingoLogo,
    "Apple TV+": appletvLogo,
    "Microsoft 365": microLogo,
    Goodreads: goodreadsLogo,
    };

const getGraphData = (subscription, chartRef) => {
    const baseValue = subscription.usage_frequency || 10;

    // Function to add slight randomness to data
    const getRandomFactor = () => 0.8 + Math.random() * 0.4; // Random multiplier between 0.8 and 1.2

    // Generate unique data points
    const dataPoints = [
        baseValue * getRandomFactor(),
        baseValue * getRandomFactor(),
        baseValue * getRandomFactor(),
        baseValue * getRandomFactor(),
        baseValue * getRandomFactor(),
    ];

    let gradientBackground = null;

    if (chartRef?.current?.canvas) {
        const ctx = chartRef.current.canvas.getContext("2d"); // Ensure correct context
        const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);

        const baseColor = subscriptionColors[subscription.subscription_name] || "#FF6384"; // Default color

        gradient.addColorStop(0, `rgba(${hexToRgb(baseColor)}, 0.8)`); // Strong color at the top
        gradient.addColorStop(1, `rgba(${hexToRgb(baseColor)}, 0.1)`); // Fades out at the bottom

        gradientBackground = gradient;
    }

    return {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: `Usage Frequency for ${subscription.subscription_name}`,
                data: dataPoints,
                fill: true,
                backgroundColor: gradientBackground || `rgba(${hexToRgb(subscriptionColors[subscription.subscription_name] || "#FF6384")}, 0.4)`, // Fallback
                borderColor: subscriptionColors[subscription.subscription_name] || "#555",
                borderWidth: 3,
                pointBackgroundColor: "#fff",
                pointBorderColor: subscriptionColors[subscription.subscription_name] || "#000",
                pointHoverRadius: 6,
                pointRadius: 2,
                tension: 0.4, // Smooth curves
            },
        ],
    };
};

// Helper function to convert HEX to RGB
const hexToRgb = (hex) => {
    hex = hex.replace("#", "");
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return `${r},${g},${b}`;
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
      legend: {
          display: false,
      },
  },
  elements: {
      point: {
          radius: 2,
          hoverRadius: 3,
          backgroundColor: "#0ff",
      },
      line: {
          tension: 0.3,
      },
  },
  scales: {
      x: {
          grid: { display: false }, // Remove grid
      },
      y: {
          grid: { display: false }, // Remove grid
          ticks: {
              display: false, // Hide Y-axis labels
          },
      },
  },
};

const SubscriptionCard = ({ subscription }) => {
    const chartRef = useRef(null); // Create a ref for the chart
  
    const memoizedGraphData = useMemo(() => getGraphData(subscription, chartRef), [subscription]);
  
    // Format dates to "DD MMM YYYY"
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };
    const formattedCost = parseFloat(subscription.subscription_cost).toFixed(2);
    const [integerPart, decimalPart] = formattedCost.split(".");
    return (
      <div className="subscription-card">
        <div className="sub-head">
          <div style={{display:"flex", flexDirection:"row"}}>
          <img
            src={subscriptionLogos[subscription.subscription_name]}
            alt={subscription.subscription_name}
          />
          <div style={{position:"absolute", right:"20px", textAlign:"right"}}>
          <p style={{fontSize:"10px"}}>From: {formatDate(subscription.start_date)}</p>
          <p style={{fontSize:"10px"}}>End: {formatDate(subscription.end_date)}</p>
  
          </div>
          
          </div>
          
          <div>
            <p style={{fontSize:"13px", fontWeight:"600"}}>{subscription.subscription_name}</p>
            <p style={{ fontSize: "25px", fontWeight: "400" }}>
                $<span style={{ color: "white" }}>{integerPart}</span>
                <span style={{ color: "gray" }}>.{decimalPart}</span>
              </p>
          </div>
        </div>
  
      
        {/* Modern Styled Graph */}
        <div className="graph-container" style={{ width: "100%", height: "120px" }}>
          <Line ref={chartRef} data={memoizedGraphData} options={chartOptions} />
        </div>
      </div>
    );
  };
  
const Carousel = ({ filteredSubscriptions, categories, filteredCategory, setFilteredCategory }) => {
    const [currentIndex, setCurrentIndex] = React.useState(1); // Start at the 2nd card for 3-card display

    const prevSlide = () => {
      if (currentIndex > 1) {
        setCurrentIndex(currentIndex - 1);
      }
    };
    
    const nextSlide = () => {
      if (currentIndex + 1 < filteredSubscriptions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
    


  return (
    <div className="container-sub">
    {/* Header Section */}
    <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
      
    
      <div className="subs-head">
        <h1>Stay in Control<br/> of Your <span style={{color: "#007bff"}}>Subscriptions</span></h1>
        <p>Analyze and explore usage patterns across various categories</p>
        <div className="category-filter">
        <select value={filteredCategory} onChange={(e) => setFilteredCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      </div>
    </div>
  
    <div className="cards-container">
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
     
  
      {filteredSubscriptions.length > 3 && (
        <div className="carousel-buttons">
          <button onClick={prevSlide} disabled={currentIndex === 0}>
            ←
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex + 2 >= filteredSubscriptions.length - 1}
          >
            →
          </button>
        </div>
      )}
    </div>
  
    {/* Subscription Cards */}
    <div
      className="subscription-cards"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       
        gap: "16px",
      }}
    >
      {filteredSubscriptions.map((subscription, index) => {
        // Determine if the card is in view
        const isVisible =
          index >= currentIndex - 1 && index <= currentIndex + 1; // Show center + 2 neighbors
        const isFocused = index === currentIndex;
  
        return (
          isVisible && (
            <div
      key={subscription.id}
      style={{
        minWidth: "230px", // Reduced from 255px
        height: "220px", // Reduced from 250px
        transform: `scale(${isFocused ? 1.2 : 1})`, // Enlarge center card
        opacity: isFocused ? 1 : 0.7, // Dim non-focused cards
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }}
    >
      <SubscriptionCard subscription={subscription} />
    </div>
          )
        );
      })}
    </div>
        </div>
    
  </div>
  
  );
};

export default Carousel;
