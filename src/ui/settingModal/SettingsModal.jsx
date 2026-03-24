import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import closeIcon from "../../assets/images/icon-close.svg";

function SettingsModal({ user, isModalOpen, onClose }) {
  const [userName, setUserName] = useState("");

  const ref = useRef();

  useEffect(() => {
    if (user) setUserName(user.name);
  }, [user]);

  useEffect(() => {
    if (isModalOpen && user) {
      ref.current.showModal();
    } else if (ref.current?.open) {
      ref.current.close();
    }
  }, [isModalOpen, user]);

  if (!isModalOpen) return null;

  return createPortal(
    <dialog
      ref={ref}
      className="relative w-150 m-auto px-4 py-10 md:px-10 md:py-12 rounded-2xl text-dark-text flex flex-col gap-6 md:gap-8 "
    >
      <button onClick={onClose} className="absolute right-6 top-6 ">
        <img src={closeIcon} className="w-2.5 h-2.5 md:w-3.75 md:h-3.75" />
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
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="h-12.5 border-1 border-(--color-neutral-600) rounded-lg px-4"
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

            <button className="text-preset-6 border border-(--color-neutral-300) py-2 px-4 rounded-lg">
              Upload
            </button>
          </div>
        </div>
      </div>

      <button className="text-preset-5 text-white-text bg-bright-blue-btn h-15 rounded-xl">
        Save changes
      </button>
    </dialog>,
    document.getElementById("modal"),
  );
}

export default SettingsModal;
