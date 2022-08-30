import React from "react";
import categoryIcon from "../../assets/categoryIcon.png";
import "./ProblemHeader.css";

function ProblemHeader({ name, difficulty, category }) {
  return (
    <div className="problem-header-container">
      <h2>{name}</h2>
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
          <span className="problem-header-difficulty">{difficulty}</span>
        </span>
        <span className="header-label">
          <img src={categoryIcon} alt="" />
          Category: {category}
        </span>

        <div className="add-rating-btn-container">
          <button className="add-rating-btn">Add Rating</button>
        </div>
      </div>
    </div>
  );
}

export default ProblemHeader;
