import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { dracula } from "@uiw/codemirror-theme-dracula";
import "./Solution.css";

function Solution({ solution }) {
  return (
    <div className="user-solution-container">
      {/* Voting Icons */}
      <div className="user-solution-voting-icons">
        <i class="fa-solid fa-caret-up"></i>
        <p className="user-solution-vote-count">30</p>
        <i class="fa-solid fa-caret-down"></i>
      </div>

      {/* Title and Code Editor */}
      <div className="user-solution-title-editor-container">
        <div className="user-solution-title-edit">
          <p className="user-solution-title">Lorem, ipsum dolor sit amet</p>
          <button className="edit-solution-btn">Edit Solution</button>
        </div>
        <div className="user-solution-editor-container">
          <CodeMirror
            value={solution}
            height="250px"
            extensions={[javascript(), python()]}
            theme={dracula}
            editable={false}
            className="solution-code-editor"
          />
        </div>

        {/* Solution Owner and Date */}
        <div className="solution-owner-date">
          <div className="solution-owner">
            <i class="fa-solid fa-user"></i>
            <p>AZensky</p>
          </div>
          <div className="solution-date">March 22, 2022</div>
        </div>
      </div>
    </div>
  );
}

export default Solution;
