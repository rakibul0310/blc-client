import React from "react";

const Modal = ({ openModal, setOpenModal, modalTitle, children, modalRef }) => {
  return (
    <>
      {openModal && (
        <>
          <dialog open ref={modalRef} className="custom_modal">
            <div className="title">
              <h2>{modalTitle}</h2>
              <span onClick={() => setOpenModal(false)}>&times;</span>
            </div>
            {children}
          </dialog>
          <div className="backdrop_effect"></div>
        </>
      )}
    </>
  );
};

export default Modal;
