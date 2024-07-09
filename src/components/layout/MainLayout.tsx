import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:max-w-[960px] md:max-w-[720px] lg:max-w-[1200px] xl:max-w-[1400px]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
