import { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import dropdownArrow from "../assets/images/icon-dropdown-arrow.svg";
import { getData } from "../util/storage";

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = getData();
    setUser(data?.users?.[0]);
  }, []);

  return (
    <header className="flex justify-between items-center">
      <img src={logo} alt="logo" />
      <div className="flex items-center gap-2.5">
        <img
          src={user?.avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <img src={dropdownArrow} alt="dropdown icon" />
      </div>
    </header>
  );
}

export default Header;
