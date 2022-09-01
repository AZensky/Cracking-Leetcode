import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDisplayProblemsContext } from "../../context/DisplayProblems";
import "./Topic.css";
import LeetcodeProblem from "../LeetcodeProblem/LeetcodeProblem";

function Topic({ num, title, problems }) {
  const { displayProblems } = useDisplayProblemsContext();
  const [showProblems, setShowProblems] = useState(false);

  useEffect(() => {
    setShowProblems(displayProblems);
  }, [displayProblems]);

  return (
    <div className="topic-and-problems-container">
      <div
        className="topic-container"
        onClick={() => setShowProblems(!showProblems)}
      >
        <h4>
          {num}. {title}
        </h4>
        <button>
          {showProblems && <i className="fa-solid fa-angle-up"></i>}
          {!showProblems && <i className="fa-solid fa-angle-down"></i>}
        </button>
      </div>
      <div className="topic-problems-container">
        {showProblems && (
          <div className="topic-problems">
            {problems &&
              problems.map((problem) => (
                <LeetcodeProblem
                  key={problem.id}
                  name={problem.name}
                  difficulty={problem.difficulty}
                  id={problem.id}
                  ratings={problem.ratings}
                  link={problem.link}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Topic;
