import React from "react";
import categoryIcon from "../../assets/categoryIcon.png";
import "./ProblemHeader.css";

function ProblemHeader() {
  return (
    <div className="problem-header-container">
      <h2>Product of Array Except Self</h2>
      <div className="problem-header-details-container">
        <div className="header-label">
          <span className="problem-rating-title">Rating</span>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star empty"></i>
        </div>
        <span className="header-label">
          Difficulty Level:{" "}
          <span className="problem-header-difficulty">Easy</span>
        </span>
        <span className="header-label">
          <img src={categoryIcon} alt="" />
          Category: Arrays
        </span>
      </div>
    </div>
  );
}

export default ProblemHeader;
