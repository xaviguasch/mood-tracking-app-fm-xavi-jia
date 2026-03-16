import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar-lisa.jpg";
import dropdownArrow from "../assets/images/icon-dropdown-arrow.svg";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <img src={logo} alt="logo" />
      <div className="flex items-center gap-2.5">
        <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
        <img src={dropdownArrow} alt="dropdown icon" />
      </div>
    </header>
  );
}

export default Header;
