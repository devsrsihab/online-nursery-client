import { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import NavbarCloseBtn from "./NavbarCloseBtn";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      style={{ zIndex: 99999, transition: "top 0.3s" }}
      className={`bg-white border-gray-200 px-8 fixed w-full ${
        isVisible ? "top-0 right-0 left-0" : "-top-32 right-0 left-0"
      }`}
    >
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo image="https://i.ibb.co/6nmZ2c1/logo.png" />
        <NavbarCloseBtn isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        <NavMenu isOpenMenu={isOpenMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
