import { useCallback, useState } from "react";
import NavbarItem from "./NavbarItem";
import { BsChevronDown, BsBell, BsSearch } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className="
            px-4
            md:px-16
            py-6
            flex
            flex-row
            items-center
            transition
            duration-500
            bg-zinc-900
            bg-opacity-90"
      >
        <img className="h-12 lg:h-12" src="/images/logo2.png" alt="Logo" />
        <div
          className="
                flex-row
                ml-8
                gap-7
                hidden
                lg:flex"
        >
          <NavbarItem label="Home" />
          <NavbarItem label="Films" />
          <NavbarItem label="Series" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="Browse By Languages" />
          <NavbarItem label="My List" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-md">Browse</p>
          <BsChevronDown className="text-white w-4 transition" />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/profile-blue.jpg" alt="Profile" />
            </div>
            <BsChevronDown className="text-white w-4 transition" />
            <AccountMenu/>
                  </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
