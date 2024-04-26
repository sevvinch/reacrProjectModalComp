import React from "react";

export const Modal = ({ onSubmit, onCancel, closeModal, children }) => {
  return (
    <div
      className="modal-container fixed left-0 top-0 w-[100%] h-[100%] flex items-center justify-center bg-[rgba(0, 0, 0, 0.5)]"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
      }}
    >
      <div className="modal rounded-[5px] p-[2rem] bg-white w-[30em] border">
        <div
          className="modal-header flex justify-items-end text-[2rem]"
          onClick={() => closeModal("Modal was closed")}
        >
          <p className="close cursor-pointer ml-[95%]">&times;</p>
        </div>
        <div className="modal-content mb-[2rem]">{children}</div>
        <div className="modal-footer flex justify-evenly">
          <button
            type="submit"
            className="btn btn-submit bg-[#e07f4f] border-none text-white py-[0.5rem] px-[1.5rem] rounded-[5px] cursor-pointer text-[1rem]"
            onClick={() => onSubmit("Submit button was clicked")}
          >
            Submit
          </button>
          <button
            type="submit"
            className="btn btn-cancel bg-white  border border-[#e07f4f] text-[#e07f4f] py-[0.5rem] px-[1.5rem] rounded-[5px] cursor-pointer text-[1rem]"
            onClick={() => onCancel("Cancel button was clicked")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
