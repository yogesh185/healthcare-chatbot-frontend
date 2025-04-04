import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaPaperPlane, FaTimes } from "react-icons/fa";
import "../css/Chatbot.css";

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("chatbot-open");
    return () => {
      document.body.classList.remove("chatbot-open");
    };
  }, []);

  useEffect(() => {
    chatBodyRef.current?.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");

    setIsTyping(true);

    try {
      const API_BASE_URL = "https://healthcare-chatbot-backend.up.railway.app/"; // Replace with actual Railway backend URL

      const response = await axios.post(`${API_BASE_URL}/chat`, {
        message: input,
      });

      const botReply = { text: response.data.response, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Sorry, I am having trouble responding right now.", sender: "bot" }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chat-overlay">
      <div className="chatbot-container">
        <div className="chat-header">
          <span>DOC AI Chatbot</span>
          <FaTimes className="close-btn" onClick={onClose} />
        </div>
        <div className="chat-body" ref={chatBodyRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="chat-message bot typing">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}
        </div>
        <div className="chat-footer">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
