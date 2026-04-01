import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import closeIcon from "../../assets/images/icon-close.svg";

function SettingsModal({ user, isModalOpen, onClose }) {
  const [userName, setUserName] = useState("");

  const dialogRef = useRef();

  useEffect(() => {
    if (user) setUserName(user.name);
  }, [user]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isModalOpen && user) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [isModalOpen, user]);

  const handleClose = () => {
    onClose();
  };

  const modalRoot = document.getElementById("modal");

  const modalContent = (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 m-0 p-0 w-screen h-screen max-w-none max-h-none flex justify-center items-start px-5 md:px-[21px] bg-black/40"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full max-w-[600px] mx-5 md:mx-0  mt-20 px-5 md:px-10 py-10 md:py-12 rounded-2xl bg-white shadow-lg flex flex-col gap-6 md:gap-8 text-dark-text">
        <button
          onClick={handleClose}
          className="absolute right-6 top-6 cursor-pointer focus-style"
        >
          <img
            src={closeIcon}
            className="w-2.5 h-2.5 md:w-3.75 md:h-3.75"
            alt="Close"
          />
        </button>

        <div className="flex flex-col gap-2">
          <h2 className="text-preset-3">Update your profile</h2>
          <p className="text-preset-6-regular text-light-grey-text">
            Personalize your account with your name and photo.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="text-preset-6-regular flex flex-col gap-[8px]">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="h-12.5 border border-(--color-neutral-600) rounded-lg px-4 focus-style"
            />
          </div>

          <div className="flex gap-5">
            <img
              src={user?.avatar}
              alt="avatar"
              className="w-16 h-16 rounded-full"
            />

            <div className="flex flex-col gap-4 items-start">
              <div className="flex flex-col gap-1.5">
                <p className="text-preset-6-regular">Upload Image</p>
                <p className="text-light-grey-text text-preset-7">
                  Max 250KB, PNG or JPEG
                </p>
              </div>

              <button className="text-preset-6 border border-(--color-neutral-300) py-2 px-4 rounded-lg focus-style">
                Upload
              </button>
            </div>
          </div>
        </div>

        <button className="text-preset-5 text-white-text bg-bright-blue-btn h-15 rounded-xl focus-style">
          Save changes
        </button>
      </div>
    </dialog>
  );

  return createPortal(modalContent, modalRoot);
}

export default SettingsModal;
