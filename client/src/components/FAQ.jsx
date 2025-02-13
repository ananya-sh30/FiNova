import React, { useState } from "react";
import "../styles/FAQ.css";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const faqs = [
    { id: "q1", question: "What services do you offer?", answer: "We offer financial planning, investment advice, retirement planning, tax strategies, and risk management services." },
    { id: "q2", question: "How do I schedule a consultation?", answer: "You can schedule a consultation through our website's contact form or by calling our office directly." },
    { id: "q3", question: "Do you charge for the initial consultation?", answer: "No, our initial consultation is free of charge to understand your financial needs and how we can assist you." },
    { id: "q4", question: "How do you ensure my financial information is secure?", answer: "We use industry-standard encryption and secure protocols to protect your financial data." },
    { id: "q5", question: "What should I bring to my first consultation?", answer: "Please bring financial statements, tax returns, investment details, and any relevant documents to help us understand your financial situation." },
    { id: "q6", question: "Can you help with tax planning?", answer: "Yes, we offer tax-efficient strategies to help you minimize tax liabilities and optimize your financial plan." },
    { id: "q7", question: "What is your investment philosophy?", answer: "Our investment approach is tailored to your goals, focusing on diversification, risk management, and long-term growth." },
    { id: "q8", question: "Do you offer estate planning services?", answer: "Yes, we assist with estate planning to help secure your legacy and ensure your assets are distributed according to your wishes." }
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
