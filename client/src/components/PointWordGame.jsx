import React, { useState, useEffect } from "react";
import "../styles/Game.css";
import coin from "../assets/coin.png";

const words = [
  { jumbled: "vgstienni", correct: "investing", meaning: "The act of allocating resources for future benefits." },
  { jumbled: "gdtube", correct: "budget", meaning: "A financial plan for managing income and expenses." },
  // Add additional word objects here
];

const PointWordGame = () => {
  const [currentWord, setCurrentWord] = useState({});
  const [coins, setCoins] = useState(100);
  const [userInput, setUserInput] = useState("");
  const [points, setPoints] = useState(0);
  const [message, setMessage] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    newGame();
  }, []);

  const newGame = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentWord(words[randomIndex]);
    setUserInput("");
    setMessage("");
    setCorrectAnswer("");
    setIsCorrect(false);
  };

  const checkAnswer = () => {
    if (!userInput.trim() || !points) return;

    if (userInput.trim().toLowerCase() === currentWord.correct.toLowerCase()) {
      setCoins(coins + parseInt(points));
      setMessage(`Correct! You've earned ${points} points!`);
      setCorrectAnswer(`Meaning: ${currentWord.meaning}`);
      setIsCorrect(true); // Set correct flag to true
    } else {
      setMessage("Incorrect, try again!");
      setCorrectAnswer(`Correct Word: ${currentWord.correct} | Meaning: ${currentWord.meaning}`);
      setIsCorrect(false); // Set correct flag to false
    }
  };

  return (
    <div className="pwg">
      <div className="pwg-game-container">
        <h2>Point Word Game 🎰</h2>
        <h3 className="pwg-jumbled-word">{currentWord.jumbled}</h3>
        <input
          type="text"
          className="pwg-input"
          value={userInput}
          placeholder="Your answer here"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <br />
        <br />
        <input
          type="number"
          className="pwg-input"
          value={points}
          placeholder="Enter points"
          min="1"
          onChange={(e) => setPoints(e.target.value)}
        />
        <button className="pwg-button" onClick={checkAnswer}>
          Submit
        </button>
        <p className={`pwg-message ${isCorrect ? 'correct' : ''}`}>{message}</p>
        {correctAnswer && <p className="pwg-correct-answer">{correctAnswer}</p>}
        <div className="pwg-coin-container">
          <img
            className="pwg-coin-icon"
            src={coin}
            alt="Coin"
          />
          <span className="pwg-coins">{coins}</span>
        </div>
        <button className="pwg-button" onClick={newGame}>
          New Word
        </button>
      </div>
    </div>
  );
};

export default PointWordGame;
