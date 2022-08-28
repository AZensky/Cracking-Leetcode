import React from "react";
import Solution from "./Solution";
import "./ProblemSolutions.css";

function ProblemSolutions() {
  let solution = `function hello() {
    return 'Hello World!'
}`;
  return (
    <div className="solutions-container">
      {/* Our Solution */}
      <div className="our-solution">
        <h3 className="solutions-header">Our Solution</h3>
        <Solution solution={solution} />
      </div>

      {/* User Solutions */}
      <h3 className="solutions-header">User Solutions</h3>

      <Solution solution={solution} />
    </div>
  );
}

export default ProblemSolutions;
