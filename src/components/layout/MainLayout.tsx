import { Outlet } from "react-router-dom";
import Navbar from "../home/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:max-w-[960px] md:max-w-[720px] lg:max-w-[1200px] xl:max-w-[1400px]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
