import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TeamSection from "./components/TeamSection";
import BenefitsSection from "./components/BenefitsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);

    if (!isChatbotOpen) {
      document.body.classList.add("chatbot-open");
    } else {
      document.body.classList.remove("chatbot-open");
    }
  };

  return (
    <>
      <div className={`app-container ${isChatbotOpen ? "chatbot-open" : ""}`}>
        <Header />
        <HeroSection onChatbotToggle={toggleChatbot} />
        <BenefitsSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Chatbot placed OUTSIDE app-container */}
      {isChatbotOpen && <Chatbot onClose={toggleChatbot} />}
    </>
  );
}

export default App;
