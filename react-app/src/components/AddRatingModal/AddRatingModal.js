import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AddRatingForm from "./AddRatingForm";
import "./AddRatingModal.css";

function AddRatingModal() {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className="add-rating-btn">
        Add Rating
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddRatingForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default AddRatingModal;
