import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Modal } from "../../context/Modal";
import { deleteSolution, loadSolutions } from "../../store/solutions";
import "./DeleteSolutionModal.css";

function DeleteSolutionModal({ solutionId }) {
  const { problemId } = useParams();
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  async function handleConfirm(e) {
    e.preventDefault();

    await dispatch(deleteSolution(problemId, solutionId));

    await dispatch(loadSolutions(problemId));

    setShowModal(false);
  }

  return (
    <>
      <i class="fa-solid fa-trash-can" onClick={() => setShowModal(true)}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="login-form">
            <h4 className="delete-solution-title">Are you sure?</h4>
            <p className="delete-solution-description">
              Do you really want to delete this solution?
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

export default DeleteSolutionModal;
