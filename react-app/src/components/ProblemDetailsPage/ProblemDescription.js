import React from "react";
import exampleProblem from "../../assets/exampleProblem.svg";
import "./ProblemDescription.css";

function ProblemDescription({ description }) {
  return (
    <div className="problem-description-container">
      <h3 className="problem-description-title">Problem</h3>
      <p className="problem-description">{description}</p>
      <img
        src={exampleProblem}
        alt="example-problem"
        className="example-problem"
      />
    </div>
  );
}

export default ProblemDescription;
