import React from "react";
import exampleProblem from "../../assets/exampleProblem.svg";
import "./ProblemDescription.css";

function ProblemDescription() {
  return (
    <div className="problem-description-container">
      <h3 className="problem-description-title">Problem</h3>
      <p className="problem-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro
        alias dicta nulla est voluptate, asperiores sint! Magnam esse doloribus,
        qui id itaque illo corrupti?
      </p>
      <p className="problem-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nisi
        quis, delectus quo odio magnam!
      </p>
      <img
        src={exampleProblem}
        alt="example-problem"
        className="example-problem"
      />
    </div>
  );
}

export default ProblemDescription;
