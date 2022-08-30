import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { loadProblems } from "../../store/problems";
import Rating from "react-rating";
import "./AddRatingForm.css";
import { useEffect } from "react";

function AddRatingForm({ closeModal }) {
  const { problemId } = useParams();
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];

    if (rating === 0) errors.push("Rating is required");

    setValidationErrors(errors);
  }, [rating]);

  async function handleSubmit(e) {
    e.preventDefault();
    setHasSubmitted(true);

    if (validationErrors.length > 0) return;

    const info = {
      rating,
    };

    await fetch(`/api/problems/${problemId}/ratings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    await dispatch(loadProblems());

    closeModal();
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <ul className="login-form__validation-errors">
        {hasSubmitted &&
          validationErrors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <h1 className="rating-form-title">Add Review</h1>
      <Rating
        emptySymbol="fa fa-star empty fa-2x"
        fullSymbol="fa fa-star fa-2x"
        className="rating-form-input"
        onChange={(value) => setRating(value)}
        initialRating={rating}
      />
      <button type="submit" className="login-form__log-in">
        Submit Rating
      </button>
    </form>
  );
}

export default AddRatingForm;
