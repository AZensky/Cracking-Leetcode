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
            An efficient way to learn data structures and algorithms.
          </p>
        </div>

        <div className="footer-inspiration">
          <p className="footer-section-title">Inspiration</p>
          <a
            className="footer-text"
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leetcode
          </a>
          <a
            className="footer-text"
            href="https://neetcode.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neetcode
          </a>
          <a
            className="footer-text"
            href="https://www.crackingthecodinginterview.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cracking the Coding Interview
          </a>
          <a
            className="footer-text"
            href="https://www.techinterviewhandbook.org/grind75"
            target="_blank"
            rel="noopener noreferrer"
          >
            Grind 75
          </a>
        </div>

        <div className="footer-contact">
          <p className="footer-section-title">Contact</p>
          <a
            className="footer-text"
            href="https://www.linkedin.com/in/alex-zelinsky"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="footer-text"
            href="https://github.com/AZensky/Cracking-Leetcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="footer-text"
            href="https://medium.com/@alexzelinsky124"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
          {/* <a
            className="footer-text"
            href="mailto:alexzelinsky124@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
