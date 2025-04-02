import React from "react";
import "../css/Footer.css";

function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} DOC AI. All rights reserved.</p>
        </div>
      </footer>
    );
  }

  export default Footer;