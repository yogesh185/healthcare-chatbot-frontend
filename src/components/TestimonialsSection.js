import React, { useState, useEffect } from "react";
import "../css/Testimonials.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Student",
    feedback:
      "DOC AI has been a game-changer for me! Instead of waiting for hours at a clinic, I can now get instant responses to my health concerns. The chatbot’s accuracy and friendly interaction make it feel like I’m talking to a real doctor. Highly recommended!",
  },
  {
    name: "Dr. Riya Mehta",
    role: "General Physician",
    feedback:
      "As a healthcare provider, I see the potential of AI-driven chatbots like DOC AI in reducing patient anxiety and providing preliminary guidance. It efficiently directs users to the right healthcare resources, making medical assistance more accessible to all.",
  },
  {
    name: "Neha Verma",
    role: "Software Developer",
    feedback:
      "I love the seamless UI and how fast DOC AI processes my symptoms to give instant health insights. The chatbot’s integration into the website is smooth, and it even blurs the background for an immersive experience. Amazing work by the team!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <h2 className="section-title">What People Say</h2>
      <div className="testimonial-container">
        <div className="testimonial fade-in">
          <FaQuoteLeft className="quote-icon left" />
          <p className="testimonial-text">{testimonials[currentIndex].feedback}</p>
          <FaQuoteRight className="quote-icon right" />
          <h4 className="testimonial-name">{testimonials[currentIndex].name}</h4>
          <p className="testimonial-role">{testimonials[currentIndex].role}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
