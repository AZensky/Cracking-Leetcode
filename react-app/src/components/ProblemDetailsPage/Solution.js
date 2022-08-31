import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadSolutions } from "../../store/solutions";
import { useParams } from "react-router-dom";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { dracula } from "@uiw/codemirror-theme-dracula";
import EditSolutionModal from "../EditSolutionModal/EditSolutionModal";
import DeleteSolutionModal from "../DeleteSolutionModal/DeleteSolutionModal";
import { getDayMonthYear } from "../../util/date";
import "./Solution.css";

// prettier-ignore
function Solution({ solution, title, language, userId, solutionId, username, date, solutionVotes }) {
  const { problemId } = useParams()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.session.user);

  let solutionVoteCount = 0;
  let userVotedUp = false;
  let userVotedDown = false;

  if (solutionVotes.length > 0) {
  solutionVotes.forEach((vote) => {
    vote.upvote === true ? solutionVoteCount++ : solutionVoteCount--;
    if (user?.id === vote.userId && vote.upvote === true) userVotedUp = true;
    if (user?.id === vote.userId && vote.upvote === false) userVotedDown = true;
  });
  }



  let solutionDate = new Date(date);

  let {day, month, year} = getDayMonthYear(solutionDate);

  async function upvote() {
    const res = await fetch(`/api/solutions/${solutionId}/votes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({'upvote': true}),
    });

    await dispatch(loadSolutions(problemId))
  }

    async function downvote() {
      const res = await fetch(`/api/solutions/${solutionId}/votes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({'upvote': false}),
      });

      await dispatch(loadSolutions(problemId));
    }

  return (
    <div className="user-solution-container">
      {/* Voting Icons */}
      <div className="user-solution-voting-icons">
        <button onClick={upvote} disabled={userVotedUp || !user}>
          <i className="fa-solid fa-caret-up"></i>
        </button>
        <p className="user-solution-vote-count">{solutionVoteCount}</p>
        <button onClick={downvote} disabled={userVotedDown || !user}>
          <i className="fa-solid fa-caret-down"></i>
        </button>
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
              theme={dracula}
              editable={false}
              className="solution-code-editor"
            />
          )}
        </div>

        {/* Solution Owner and Date */}
        <div className="solution-owner-date">
          <div className="solution-owner">
            <i class="fa-solid fa-user"></i>
            <p>{username}</p>
          </div>
          <div className="solution-date">
            {month} {day}, {year}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solution;
