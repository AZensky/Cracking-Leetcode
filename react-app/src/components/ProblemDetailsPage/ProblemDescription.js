import React from "react";
import "./ProblemDescription.css";

function ProblemDescription({ description, example }) {
  return (
    <div className="problem-description-container">
      <h3 className="problem-description-title">Problem</h3>
      <p className="problem-description">{description}</p>
      <h4 className="problem-description-example-title">Example</h4>
      <pre>
        <code
          className={example ? "problem-example" : "loading-problem-example"}
        >
          {example}
        </code>
      </pre>
    </div>
  );
}

export default ProblemDescription;
