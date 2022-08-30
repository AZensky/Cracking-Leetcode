import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditRatingForm from "./EditRatingForm";
import "./EditRatingModal.css";

function EditRatingModal({ userRating, ratingId }) {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className="add-rating-btn">
        Edit Rating
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditRatingForm
            closeModal={closeModal}
            userRating={userRating}
            ratingId={ratingId}
          />
        </Modal>
      )}
    </>
  );
}

export default EditRatingModal;
