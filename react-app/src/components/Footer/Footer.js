import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        {/* Website Description */}
        <div className="footer-website-description">
          <p className="footer-website-name">Cracking Leetcode</p>
          <p className="footer-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            inventore, itaque debitis sit placeat dolorum!
          </p>
        </div>

        <div className="footer-inspiration">
          <p className="footer-section-title">Inspiration</p>
          <p className="footer-text">Leetcode</p>
          <p className="footer-text">Neetcode</p>
          <p className="footer-text">Cracking the Coding Interview</p>
          <p className="footer-text">Grind 75</p>
        </div>

        <div className="footer-contact">
          <p className="footer-section-title">Contact</p>
          <p className="footer-text">LinkedIn</p>
          <p className="footer-text">Medium</p>
          <p className="footer-text">Email</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
