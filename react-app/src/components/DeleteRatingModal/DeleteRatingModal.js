import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Modal } from "../../context/Modal";
import { loadProblems } from "../../store/problems";
import "./DeleteRatingModal.css";

function DeleteRatingModal({ ratingId }) {
  const { problemId } = useParams();
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  async function handleConfirm(e) {
    e.preventDefault();

    await fetch(`/api/problems/${problemId}/ratings/${ratingId}`, {
      method: "DELETE",
    });

    await dispatch(loadProblems());

    setShowModal(false);
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className="delete-rating-btn">
        Delete Rating
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="login-form">
            <h4 className="delete-solution-title">Are you sure?</h4>
            <p className="delete-solution-description">
              Do you really want to delete this rating?
            </p>
            <div className="delete-solution-btn-container">
              <button className="confirm-delete" onClick={handleConfirm}>
                Yes
              </button>
              <button
                className="cancel-delete"
                onClick={() => setShowModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default DeleteRatingModal;
