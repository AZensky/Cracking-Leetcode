import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditSolutionForm from "./EditSolutionForm";

function EditSolutionModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <i className="fa-solid fa-pen" onClick={() => setShowModal(true)}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} style={"wide"}>
          <EditSolutionForm />
        </Modal>
      )}
    </>
  );
}

export default EditSolutionModal;
