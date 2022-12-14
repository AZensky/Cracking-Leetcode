import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditSolutionForm from "./EditSolutionForm";

function EditSolutionModal({ solutionId, title, solution, language }) {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <i className="fa-solid fa-pen" onClick={() => setShowModal(true)}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} styleClass={"wide"}>
          <EditSolutionForm
            solutionId={solutionId}
            oldTitle={title}
            oldSolution={solution}
            oldLanguage={language}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </>
  );
}

export default EditSolutionModal;
