import { useState } from "react";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import NavbarCloseBtn from "./NavbarCloseBtn";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <nav
      style={{ zIndex: 99999 }}
      className="bg-white border-gray-200  dark:bg-gray-900"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <NavbarCloseBtn isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        <NavMenu isOpenMenu={isOpenMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
