import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import emailjs from 'emailjs-com'; // Import the EmailJS library
import "../css/Contact.css";

function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Sending email using EmailJS
    emailjs.sendForm('service_xkvnf5t', 'template_u8ddf0a', e.target, 'WuQu57homdkeF7Tkl')
      .then((result) => {
        console.log(result.text);
        alert('Thank you for your message! We will get back to you soon.');
      }, (error) => {
        console.log(error.text);
        alert('Oops! Something went wrong, please try again later.');
      });

    // Reset form data after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Vellore Institute Of Technology</p>
          <p>Bhopal</p>
          <p>123-456-7890</p>
          <p>info@mysite.com</p>
          <div className="social-icons">
            <a href="#" className="social-icon facebook"><FaFacebookF /></a>
            <a href="#" className="social-icon twitter"><FaTwitter /></a>
            <a href="#" className="social-icon linkedin"><FaLinkedinIn /></a>
            <a href="#" className="social-icon instagram"><FaInstagram /></a>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="form-input"
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
