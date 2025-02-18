import React, { useState } from 'react';
import "../styles/Game.css";
import Leaderboard from './Leaderboard';
import GuessTheElementGame from './GuessTheElement';
import PointWordGame from './PointWordGame';

const Game = ({ isLoggedIn, userEmail }) => {
  const [activeGame, setActiveGame] = useState('guessElement'); // State to track the active game

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
        <h1 className="title-game">
          Money <span style={{ color: "#007bff" }}>Mastery</span> Challenge
        </h1>
        <p className="subtitle-game">
          Unlock Knowledge, Beat Challenges, and Level Up Your Money Smarts
        </p>
      </div>

      {/* Game Switch */}
      <div className="game-switch">
        <button
          className={`game-buttonn ${activeGame === 'guessElement' ? 'active' : ''}`}
          onClick={() => setActiveGame('guessElement')}
        >
          Guess the Element Game
        </button>
        <button
          className={`game-buttonn ${activeGame === 'pointWord' ? 'active' : ''}`}
          onClick={() => setActiveGame('pointWord')}
        >
          Point Word Game
        </button>
      </div>

      {/* Conditionally Render Games */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        {activeGame === 'guessElement' && <GuessTheElementGame />}
        {activeGame === 'pointWord' && <PointWordGame />}
        <Leaderboard />
      </div>
    </div>
  );
};

export default Game;
