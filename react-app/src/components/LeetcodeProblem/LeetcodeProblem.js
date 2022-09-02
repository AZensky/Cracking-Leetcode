import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addSolvedProblem, removeSolvedProblem } from "../../store/session";
import Rating from "react-rating";
import "./LeetcodeProblem.css";

function LeetcodeProblem({ name, id, difficulty, ratings, link }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const problemsSolved = user?.problemsSolved;

  let solvedProblem = problemsSolved?.find(
    (problem) => problem.problemId === id
  );

  let problemRating = 0;

  if (ratings.length > 0) {
    problemRating =
      ratings.reduce((accum, curr) => accum + curr.rating, 0) / ratings.length;
  }

  problemRating = problemRating.toFixed(2);

  async function handleAdd(id) {
    await dispatch(addSolvedProblem(user.id, id));
  }

  async function handleRemove(id) {
    await dispatch(removeSolvedProblem(user.id, id));
  }

  return (
    <div className="problem-content-container">
      {/* Solved icon */}
      {user && (
        <div className="solved-icon-container">
          <i
            className={`fa-solid fa-circle-check ${solvedProblem && "solved"}`}
            onClick={
              solvedProblem ? () => handleRemove(id) : () => handleAdd(id)
            }
          ></i>
        </div>
      )}

      {/* Problem Overview Details */}
      <div className="lc-problem-overview-container">
        <div className="lc-problem-overview">
          <Link to={`/problems/${id}`} className="problem-link">
            <p className="lc-problem-title">{name}</p>
          </Link>

          <div className="lc-problem-details">
            <span>Rating:</span>
            <Rating
              emptySymbol="fa fa-star empty"
              fullSymbol="fa fa-star"
              className="problem-rating-display"
              initialRating={problemRating}
              readonly={true}
            />
            <span id="lc-problem-rating-number">
              ({ratings?.length} ratings)
            </span>
            <span className="lc-difficulty-title">Difficulty Level:</span>
            <div className="lc-problem-diffculty">
              <span>{difficulty}</span>
            </div>
          </div>
        </div>

        {/* Solve Button */}
        <a
          className="solve-challenge-btn"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="solve-challenge-btn-container">Solve Challenge</span>
        </a>
      </div>
    </div>
  );
}

export default LeetcodeProblem;
