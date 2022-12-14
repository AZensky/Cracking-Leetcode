import React, { useEffect, useState } from "react";
import categoryIcon from "../../assets/categoryIcon.png";
import AddRatingModal from "../AddRatingModal/AddRatingModal";
import EditRatingModal from "../EditRatingModal/EditRatingModal";
import DeleteRatingModal from "../DeleteRatingModal/DeleteRatingModal";
import Rating from "react-rating";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { loadProblems } from "../../store/problems";
import "./ProblemHeader.css";

function ProblemHeader({ name, difficulty, category }) {
  const { problemId } = useParams();
  const dispatch = useDispatch();

  const allProblems = useSelector((state) => state.problems.Problems);
  const user = useSelector((state) => state.session.user);

  let problem;
  let allRatings;
  let problemRating;
  let userRated = false;
  let userRating;
  let ratingId;

  if (allProblems) {
    problem = allProblems?.find((problem) => problem.id === +problemId);

    allRatings = problem.ratings;

    // prettier-ignore
    problemRating = allRatings.reduce((accum, curr) => accum + curr.rating, 0) / allRatings.length;

    problemRating = problemRating.toFixed(2);

    if (user) {
      allRatings.forEach((rating) => {
        if (user.id === rating.userId) {
          userRated = true;
          userRating = rating.rating;
          ratingId = rating.id;
        }
      });
    }
  }

  useEffect(() => {
    const initializePage = async () => {
      await dispatch(loadProblems());
    };

    initializePage();
  }, [dispatch]);

  return (
    <div className="problem-header-container">
      <h2>{name}</h2>
      <div className="problem-header-details-container">
        <div className="header-label">
          <span className="problem-rating-title">Rating:</span>
          <div className="rating-stars-container">
            <Rating
              emptySymbol="fa fa-star empty"
              fullSymbol="fa fa-star"
              className="problem-rating-display"
              initialRating={problemRating}
              readonly={true}
            />
            <div className="search-dropdown-container">
              <div className="search-dropdown-menu">
                <div className="search-dropdown-items-container">
                  ({problemRating})
                </div>
              </div>
            </div>
          </div>

          <span id="lc-problem-rating-number">
            ({allRatings?.length || 0} ratings)
          </span>
        </div>
        <span className="header-label">
          Difficulty Level:{" "}
          <span className="problem-header-difficulty">{difficulty}</span>
        </span>
        <span className="header-label">
          <img src={categoryIcon} alt="" />
          Category: {category}
        </span>

        <div className="add-rating-btn-container">
          {user && !userRated && <AddRatingModal />}
          {user && userRated && (
            <>
              <EditRatingModal userRating={userRating} ratingId={ratingId} />
              <DeleteRatingModal ratingId={ratingId} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProblemHeader;
