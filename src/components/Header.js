import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Header.css";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <h3>DOC AI</h3>
          </div>
          
          <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
