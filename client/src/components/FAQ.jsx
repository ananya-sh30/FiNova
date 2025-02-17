import React, { useState } from "react";
import "../styles/FAQ.css";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

 const faqs = [
  { 
    id: "q1", 
    question: "What tools does Finova provide?", 
    answer: "Finova offers tools like a Net Worth Calculator, Emergency Fund Calculator, Insurance Needs Calculator, and a Subscription Tracker." 
  },
  { 
    id: "q2", 
    question: "How does the personalized investment advisory work?", 
    answer: "Our Smart Wealth Growth feature provides goal-based investment advice tailored to your financial goals, risk tolerance, and duration." 
  },
  { 
    id: "q3", 
    question: "Is Finova free to use?", 
    answer: "Finova offers basic features for free, while premium features like advanced analytics and personalized insights may require a subscription." 
  },
  { 
    id: "q4", 
    question: "How does Finova ensure my data is secure?", 
    answer: "We use advanced encryption and secure protocols to safeguard your financial information and maintain confidentiality." 
  },
  { 
    id: "q5", 
    question: "How can I track my expenses using Finova?", 
    answer: "You can use our Expense Journal to record and analyze your daily spending habits, helping you stay on top of your finances." 
  },
  { 
    id: "q6", 
    question: "Does Finova provide news and market updates?", 
    answer: "Yes, Finova’s News and Insights section keeps you informed about the latest financial trends, investment opportunities, and market news." 
  },
  { 
    id: "q7", 
    question: "What is FinGenie?", 
    answer: "FinGenie is our AI-powered chatbot designed to answer your financial queries and guide you through the platform's features." 
  },
  { 
    id: "q8", 
    question: "Can Finova help me plan for emergencies?", 
    answer: "Yes, our Emergency Fund Calculator helps you determine the optimal amount you need to be prepared for unexpected situations." 
  }
];


  return (
    <div className="container-faq">
      <h1 className="title">Frequently Asked Questions</h1>
      <p className="subtitle">Find answers to common financial queries.</p>

      <div className="faq-grid">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`faq-item ${openQuestion === faq.id ? "faq-item-hover" : ""}`}
            onClick={() => toggleAnswer(faq.id)}
          >
            <div className="question">
              {faq.question}
              <span>{openQuestion === faq.id ? "−" : "+"}</span>
            </div>
            {openQuestion === faq.id && <div className="answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
