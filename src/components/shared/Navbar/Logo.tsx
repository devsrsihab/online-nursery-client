import { Link } from "react-router-dom";

const Logo = ({image}:{image:string}) => {
  return (
    <Link
      to="/"
      className="m-w-[180px]  z-[100] m-h-[70px] flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img
        src={image}
        className="w-full h-full"
        alt="srnursery-logo"
      />
    </Link>
  );
};

export default Logo;
