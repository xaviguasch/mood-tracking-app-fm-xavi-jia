import settingsIcon from "../assets/images/icon-settings.svg";
import logoutIcon from "../assets/images/icon-logout.svg";

function DropdownMenu({ user, setIsMenuOpen, setIsModalOpen }) {
  return (
    <div
      //   className="absolute top-12 right-0 w-full min-[450px]:w-50 flex flex-col gap-3 bg-trends-background text-dark-text
      // text-left p-3 rounded-lg"

      className="fixed left-4 right-4 top-24 z-50 
        min-[450px]:absolute min-[450px]:top-14 min-[450px]:right-0 min-[450px]:left-auto min-[450px]:w-64 
        flex flex-col gap-3 bg-trends-background text-dark-text p-3 rounded-lg shadow-lg"
    >
      <div className="flex flex-col gap-[1.5px]">
        <p className="text-preset-6">{user.name}</p>
        <p className="text-preset-7 text-neutral-300 ">{user.email}</p>
      </div>

      <div className="bg-translucid-line h-px w-full"></div>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            setIsMenuOpen(false);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-3.5 cursor-pointer"
        >
          <img src={settingsIcon} />
          Settings
        </button>
        <button className="flex items-center gap-3.5 cursor-pointer">
          <img src={logoutIcon} />
          Logout
        </button>
      </div>
    </div>
  );
}

export default DropdownMenu;
