import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadSolutions } from "../../store/solutions";
import Solution from "./Solution";
import "./ProblemSolutions.css";

function ProblemSolutions() {
  const { problemId } = useParams();
  const dispatch = useDispatch();

  const allSolutions = useSelector((state) => Object.values(state.solutions));

  let exampleSolution = allSolutions.filter(
    (solution) => solution.exampleSolution === true
  )[0];
  let userSolutions = allSolutions.filter(
    (solution) => solution.exampleSolution === false
  );

  useEffect(() => {
    const fetchProblemSolutions = async () => {
      await dispatch(loadSolutions(problemId));
    };

    fetchProblemSolutions();
  }, [dispatch]);

  return (
    <div className="solutions-container">
      {/* Our Solution */}
      <div className="our-solution">
        <h3 className="solutions-header">Our Solution</h3>
        <Solution
          solution={exampleSolution?.answer}
          title={exampleSolution?.title}
          language={exampleSolution?.language}
          userId={exampleSolution?.userId}
          username={exampleSolution?.user?.username}
          date={exampleSolution?.createdAt}
          solutionId={exampleSolution?.id}
          voteCount={exampleSolution?.voteCount}
          solutionVotes={exampleSolution?.solutionVotes}
        />
      </div>

      {/* User Solutions */}
      <h3 className="solutions-header">User Solutions</h3>
      <div className="user-solutions-container">
        {userSolutions.length === 0 && (
          <p className="no-user-solutions">No User Solutions Yet!</p>
        )}
        {userSolutions.length > 0 &&
          userSolutions.map((solution) => (
            <Solution
              key={solution?.id}
              solution={solution?.answer}
              title={solution?.title}
              language={solution?.language}
              userId={solution?.userId}
              solutionId={solution?.id}
              username={solution?.user?.username}
              date={solution?.createdAt}
              voteCount={solution?.voteCount}
              solutionVotes={solution?.solutionVotes}
            />
          ))}
      </div>
    </div>
  );
}

export default ProblemSolutions;
