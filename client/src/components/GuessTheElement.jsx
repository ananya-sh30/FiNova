import React, { useState, useEffect } from "react";
import "../styles/Game.css";

const GuessTheElementGame = () => {
  const [points, setPoints] = useState(100);
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState("Click on a card to start!");
  const [gameOver, setGameOver] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showCoinPopup, setShowCoinPopup] = useState(false);

  // Card content
  const initialCardContent = [
    { type: "finance", text: "Stocks", question: "What is a stock?", options: ["A debt instrument", "Ownership in a company", "A type of bond"], answer: 1 },
    { type: "finance", text: "Bonds", question: "What is a bond?", options: ["A loan to a borrower", "A company share", "A crypto asset"], answer: 0 },
    { type: "finance", text: "Cryptocurrency", question: "Which of these is a cryptocurrency?", options: ["Bitcoin", "Dollar", "Gold"], answer: 0 },
    { type: "finance", text: "Banking", question: "What is the primary function of a bank?", options: ["Issue shares", "Provide loans and accept deposits", "Sell bonds"], answer: 1 },
    { type: "empty", text: "" },
    { type: "finance", text: "Investment", question: "What does ROI stand for?", options: ["Return on Investment", "Rate of Inflation", "Revenue on Interest"], answer: 0 },
    { type: "finance", text: "Savings", question: "What is the key benefit of saving money?", options: ["Earning more interest", "Reduced expenses", "Financial security"], answer: 2 },
    { type: "finance", text: "Loans", question: "What is an interest rate?", options: ["A fee paid for borrowing money", "A type of loan", "A fixed deposit"], answer: 0 },
    { type: "empty", text: "" },
    { type: "finance", text: "Equity", question: "What does equity represent?", options: ["A type of debt", "Ownership in a company", "A cash flow statement"], answer: 1 },
    { type: "finance", text: "Real Estate", question: "What is real estate?", options: ["Physical property", "A financial instrument", "A bank account"], answer: 0 },
    { type: "empty", text: "" },
  ];

  // Shuffle cards
  const shuffleCards = () => {
    const shuffled = [...initialCardContent];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.map((card) => ({ ...card, flipped: false }));
  };

  // Reset game
  const startGame = () => {
    setPoints(100);
    setMessage("Click on the cards to flip them!");
    setCards(shuffleCards());
    setGameOver(false);
    setShowQuiz(false);
    setCurrentQuestion(null);
  };

  useEffect(() => {
    startGame();
  }, []);

  // Handle card flip
  const flipCard = (index) => {
    if (gameOver || showQuiz) return;

    const updatedCards = [...cards];
    const card = updatedCards[index];

    if (card.flipped) return;

    card.flipped = true;
    setCards(updatedCards);

    if (card.type === "finance") {
      setCurrentQuestion(card);
      setShowQuiz(true);
    } else {
      setPoints((prev) => prev - 20);
      setMessage("Empty box! Points deducted!");
      checkGameOver(updatedCards);
    }
  };

  // Handle quiz answer
  const handleAnswer = (selectedOption) => {
    if (selectedOption === currentQuestion.answer) {
      setPoints((prev) => prev + 20);
      setMessage("Correct! Points added!");
      setShowCoinPopup(true);
      setTimeout(() => setShowCoinPopup(false), 1000);
    } else {
      setPoints((prev) => prev - 10);
      setMessage("Incorrect! Points deducted!");
    }

    setShowQuiz(false);
    setCurrentQuestion(null);
    checkGameOver(cards);
  };

  // Check if game is over
  const checkGameOver = (updatedCards) => {
    const allFlipped = updatedCards.every((card) => card.flipped);

    if (allFlipped) {
      setGameOver(true);
      if (points > 100) {
        setMessage("You Win! Congratulations!");
      } else {
        setMessage("Game Over! Try Again!");
      }
    }
  };

 
  return (
    <div className="game-container">
      <div className="game-box">
        <h2 className="game-title">Game of the Day</h2>
        <p className="game-points">Total Points: {points}</p>
        <div className="cards-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`cardd ${card.flipped ? "card-flipped" : ""}`}
              onClick={() => flipCard(index)}
            >
              <div className="card-inner">
                <div className="card-front"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
	<path fill="rgb(254, 195, 16)" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m0 13.636a.91.91 0 1 0 0 1.819a.91.91 0 0 0 0-1.819m2.68-8.306c-.74-.745-1.843-1.083-2.768-.963c-1.002.13-1.553.33-2.312.997C6.967 5.92 6.571 6.7 6.406 7.68a.682.682 0 1 0 1.345.227c.115-.686.367-1.183.75-1.519c.522-.458.83-.57 1.587-.668c.519-.068 1.196.14 1.625.572c.407.409.52.814.455 1.285c-.049.348-.294.784-.607 1.066c-.111.096-.563.487-.678.59a9 9 0 0 0-.615.593a3.9 3.9 0 0 0-.82 1.38c-.113.316-.196.716-.254 1.209a.682.682 0 1 0 1.354.158q.072-.597.183-.905c.131-.364.3-.659.538-.915l.102-.11l.06-.062c.131-.133.304-.283 1.003-.89c.565-.49.988-1.234 1.084-1.925c.122-.872-.112-1.706-.838-2.436" />
</svg></div>
                <div className="card-back">{card.text}</div>
              </div>
            </div>
          ))}
        </div>
        {showQuiz && currentQuestion && (
          <div className="quiz-box">
          <h3>{currentQuestion.question}</h3>
          <div className="quiz-options">
            {currentQuestion.options.map((option, idx) => {
              const letter = String.fromCharCode(65 + idx); // A, B, C, ...
              return (
                <button key={idx} onClick={() => handleAnswer(idx)}>
                  {letter}. {option}
                </button>
              );
            })}
          </div>
        </div>
        
        )}
        {showCoinPopup && <div className="coin-popup">+10 Points!</div>}

        <p className="game-message">{message}</p>
        <button className="game-button" onClick={startGame}>
          {gameOver ? "Play Again" : "Start Game"}
        </button>
      </div>
    </div>
  );
};

export default GuessTheElementGame;
