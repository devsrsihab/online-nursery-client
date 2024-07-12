import { Link } from "react-router-dom";
import Logo from "./Navbar/Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-white w-full rounded-lg shadow dark:bg-[#222222] my-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Logo image="https://i.ibb.co/d7kD2Rb/footer-logo.png" />
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium transition-all duration-300  text-[#CCCCCC] sm:mb-0">
              <li>
                <Link
                  to="/"
                  className="hover:text-white hover:underline me-4 md:me-6"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-white hover:underline me-4 md:me-6"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/products-management"
                  className="hover:text-white hover:underline me-4 md:me-6"
                >
                  Product Management
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {year + " "}
            SR Nursery | All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
