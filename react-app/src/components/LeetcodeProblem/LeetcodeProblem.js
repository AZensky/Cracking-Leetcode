import React from "react";
import { Link } from "react-router-dom";

import "./LeetcodeProblem.css";

function LeetcodeProblem({ name, id, difficulty }) {
  return (
    <div className="problem-content-container">
      {/* Solved icon */}
      <div className="solved-icon-container">
        <i class="fa-solid fa-circle-check"></i>
      </div>

      {/* Problem Overview Details */}
      <div className="lc-problem-overview-container">
        <div className="lc-problem-overview">
          <Link to={`/problems/${id}`} className="problem-link">
            <p className="lc-problem-title">{name}</p>
          </Link>

          <div className="lc-problem-details">
            <span>Rating:</span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star empty"></i>
            <span className="lc-difficulty-title">Difficulty Level:</span>
            <div className="lc-problem-diffculty">
              <span>{difficulty}</span>
            </div>
          </div>
        </div>

        {/* Solve Button */}
        <a
          className="solve-challenge-btn"
          href="https://leetcode.com/problems/product-of-array-except-self/"
        >
          <span>Solve Challenge</span>
        </a>
      </div>
    </div>
  );
}

export default LeetcodeProblem;
