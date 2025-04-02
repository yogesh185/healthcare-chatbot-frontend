import React from "react";
import "../css/HeroSection.css";

const HeroSection = ({ onChatbotToggle }) => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Virtual Healthcare When You Need It Most</h1>
          <p>For Anyone, Anywhere, at Anytime.</p>
          <button className="btn-primary" onClick={onChatbotToggle}>
            Get Started
          </button>
        </div>
        <div className="hero-image">
          {/* Image added via CSS */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
