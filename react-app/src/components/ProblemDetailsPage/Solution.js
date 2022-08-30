import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import { useSelector } from "react-redux";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { dracula } from "@uiw/codemirror-theme-dracula";
import EditSolutionModal from "../EditSolutionModal/EditSolutionModal";
import DeleteSolutionModal from "../DeleteSolutionModal/DeleteSolutionModal";
import "./Solution.css";

function Solution({ solution, title, language, userId, solutionId }) {
  const user = useSelector((state) => state.session.user);

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
          <p className="user-solution-title">{title}</p>
          {userId === user?.id && (
            <div className="edit-delete-container">
              <button className="edit-solution-btn">
                <EditSolutionModal
                  solutionId={solutionId}
                  title={title}
                  solution={solution}
                  language={language}
                />
              </button>
              <button className="edit-solution-btn">
                <DeleteSolutionModal solutionId={solutionId} />
              </button>
            </div>
          )}
        </div>
        <div className="user-solution-editor-container">
          {/* If language is javascript, render a code editor with javascript highlighting */}
          {language === "javascript" && (
            <CodeMirror
              value={solution}
              height="250px"
              extensions={[javascript()]}
              theme={dracula}
              editable={false}
              className="solution-code-editor"
            />
          )}

          {/* If language is python, render a code editor with python highlighting */}
          {language === "python" && (
            <CodeMirror
              value={solution}
              height="250px"
              extensions={[python()]}
              editable={false}
              className="solution-code-editor"
            />
          )}
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
