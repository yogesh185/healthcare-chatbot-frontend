import React from "react";
import BenefitImg from '../assets/benefit.png'
import "../css/Benefits.css";

function BenefitsSection() {
  const benefits = [
    { icon: 'chat-icon', title: 'Start a Chat', description: 'Connect with healthcare professionals instantly' },
    { icon: 'info-icon', title: 'Instant access to Information', description: 'Get medical information when you need it' },
    { icon: 'calendar-icon', title: '24/7 Availability', description: 'Healthcare services available round the clock' },
    { icon: 'cost-icon', title: 'Cost Effective', description: 'Affordable healthcare solutions for everyone' }
  ];

  return (
    <section id="benefits" className="benefits-section">
      <div className="container">
        <h2 className="section-title">Benefits</h2>
        <div className="benefits-container">
          <div className="benefits-image">
            <img src={BenefitImg} alt="Mobile app screenshot" />
          </div>
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className={`benefit-icon ${benefit.icon}`}></div>
                <div className="benefit-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;