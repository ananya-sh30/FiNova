import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Game.css";
import Leaderboard from './Leaderboard';
import GuessTheElementGame from './GuessTheElement';

import coin from "../assets/coin.jpg";
import graph from "../assets/graph.jpg"

const Game = ({ isLoggedIn, userEmail }) => {
    
  return (
   <div className="game-container-main">
  
    <div className="vip-club">
    <div className="coin-container">
        {/* 3D Flying Coins */}
        <div className="coin coin1"></div>
        <div className="coin coin2"></div>
        <div className="coin coin5"></div>
        <div className="coin coin3"></div>
        <div className="coin coin4"></div>
        <div className="coin coin6"></div>
      </div>
    <h1 className="title-game">Money <span style={{color: "#007bff"}}>Mastery</span> Challenge</h1>
        <p className="subtitle-game">
        Unlock Knowledge, Beat Challenges, and Level Up Your Money Smarts
        </p>
      
     
    </div>
   <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
   <GuessTheElementGame/>
   <Leaderboard/>
   </div>
   
   
   </div>
  );
};

export default Game;
