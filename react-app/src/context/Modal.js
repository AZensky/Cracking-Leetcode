import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      {/* set the ref prop onto the div, so we can set value to be the modalRef.current in the useEffect */}
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children, style }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  //   To get the elements to show up in the div in the modal provider, pass the rendered elements into createPortal's first argument
  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={onClose} />
      <div id={style !== "wide" ? "modal-content" : "wide"}>{children}</div>
    </div>,
    modalNode
  );
}
