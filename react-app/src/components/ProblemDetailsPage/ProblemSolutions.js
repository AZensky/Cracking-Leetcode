import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Solution from "./Solution";
import "./ProblemSolutions.css";

function ProblemSolutions() {
  const { problemId } = useParams();

  const [exampleSolution, setExampleSolution] = useState("");
  const [userSolutions, setUserSolutions] = useState([]);

  useEffect(() => {
    const fetchProblemSolutions = async () => {
      let res = await fetch(`/api/problems/${problemId}`);
      let data = await res.json();

      let solutions = data.solutions;
      let ourSolution = solutions.filter(
        (solution) => solution.example_solution === true
      );

      setExampleSolution(ourSolution[0].answer);
    };

    fetchProblemSolutions();
  });
  let solution = `function hello() {
    return 'Hello World!'
}`;
  return (
    <div className="solutions-container">
      {/* Our Solution */}
      <div className="our-solution">
        <h3 className="solutions-header">Our Solution</h3>
        <Solution solution={exampleSolution} />
      </div>

      {/* User Solutions */}
      <h3 className="solutions-header">User Solutions</h3>

      <Solution solution={solution} />
    </div>
  );
}

export default ProblemSolutions;
