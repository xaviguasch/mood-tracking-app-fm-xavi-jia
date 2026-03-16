import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar-lisa.jpg";
import dropdownArrow from "../assets/images/icon-dropdown-arrow.svg";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <img src={logo} alt="logo" />
      <div className="flex items-center gap-[10px]">
        <img
          src={avatar}
          alt="avatar"
          className="w-[40px] h-[40px] rounded-full"
        />
        <img src={dropdownArrow} alt="dropdown icon" />
      </div>
    </header>
  );
}

export default Header;
