import React, { useState } from "react";
import "./Topic.css";
import LeetcodeProblem from "../LeetcodeProblem/LeetcodeProblem";

function Topic({ num, title }) {
  const [showProblems, setShowProblems] = useState(false);

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
          {!showProblems && <i class="fa-solid fa-angle-down"></i>}
        </button>
      </div>
      <div className="topic-problems-container">
        {showProblems && (
          <div className="topic-problems">
            <LeetcodeProblem />
            <LeetcodeProblem />
            <LeetcodeProblem />
          </div>
        )}
      </div>
    </div>
  );
}

export default Topic;
