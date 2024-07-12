import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="m-w-[180px]  z-[100] m-h-[70px] flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img
        src="https://i.ibb.co/6nmZ2c1/logo.png"
        className="w-full h-full"
        alt="srnursery-logo"
      />
    </Link>
  );
};

export default Logo;
