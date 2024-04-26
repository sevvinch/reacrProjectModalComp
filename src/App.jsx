import { useState } from "react";
import { createPortal } from "react-dom";

import "./App.css";
import { Modal } from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };

  return (
    <div className="App bg-[#fefefe] h-[100hv] flex flex-col items-center justify-items-end pb-[2rem]">
      {message}
      <button className="btn btn-open border-none text-white py-[0.5rem] px-[1.5rem] rounded-[5px] cursor-pointer text-[1rem] bg-[#e07f4f] mt-[35%]" onClick={() => setModalOpen(true)}>
        Click
      </button>
      {modalOpen &&
        createPortal(
          <Modal
            closeModal={handleButtonClick}
            onSubmit={handleButtonClick}
            onCancel={handleButtonClick}
          >
            <h1 className="text-4xl">This is a modal</h1>
            <br />
            <p className="text-lg">This is the modal description</p>
          </Modal>,
          document.body
        )}
    </div>
  );
}

export default App;
