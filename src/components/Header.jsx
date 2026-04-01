import { useEffect, useRef, useState } from "react";

import SettingsModal from "../ui/settingModal/SettingsModal";
import logo from "../assets/images/logo.svg";
import dropdownArrow from "../assets/images/icon-dropdown-arrow.svg";
import DropdownMenu from "../ui/DropdownMenu";

function Header({ currentUser }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {currentUser && (
        <SettingsModal
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          user={currentUser}
        />
      )}

      <header className="flex justify-between items-center">
        <img src={logo} alt="logo" />

        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex items-center gap-2.5 cursor-pointer focus-style"
          >
            <img
              src={currentUser?.avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <img src={dropdownArrow} alt="dropdown icon" />
          </button>

          {isMenuOpen && (
            <DropdownMenu
              user={currentUser}
              setIsMenuOpen={setIsMenuOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
