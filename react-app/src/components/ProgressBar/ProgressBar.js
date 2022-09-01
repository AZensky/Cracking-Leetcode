import React from "react";
import "./ProgressBar.css";

function ProgressBar({ completed }) {
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-filler"
        style={{ width: `${completed}%`, transition: "width 1s ease-in-out" }}
      >
        <span className="progress-bar-label">{`${completed}%`}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
