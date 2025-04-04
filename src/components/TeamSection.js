import React from "react";
import "../css/Team.css";
import Yogesh from '../assets/yogi.jpg'
import Megha from '../assets/megha.jpg'
import Vaibhav from '../assets/vaibhav.jpg'
import Annanya from '../assets/Ananya.png'
import Ayan from '../assets/ayan.jpg'

function TeamSection() {
  const teamMembers = [
    { 
      name: 'Yogesh Amrute', 
      title: 'Full-Stack Developer',
      image: Yogesh
    },
    { 
      name: 'Megha Saxena', 
      title: 'Team Leader, UI/UX Designer',
      image: Megha
    },
    { 
      name: 'Annanya', 
      title: 'ML Research',
      image: Annanya
    },
    { 
      name: 'Vaibhav', 
      title: 'Chatbot Developer',
      image: Vaibhav
    },
    { 
      name: 'Ayan', 
      title: 'Chatbot Developer',
      image: Ayan
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image">
                <img src={member.image} alt={`${member.name}`} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
