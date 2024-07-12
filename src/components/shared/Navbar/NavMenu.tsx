import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { GrCart } from "react-icons/gr";
import { useState } from "react";

const NavMenu = ({ isOpenMenu }: { isOpenMenu: boolean }) => {
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium  flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  dark:border-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block transition-all duration-300 py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500"
                  : "block transition-all duration-300 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "block transition-all duration-300 py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500"
                  : "block transition-all duration-300 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products-management"
              className={({ isActive }) =>
                isActive
                  ? "block transition-all duration-300 py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500"
                  : "block transition-all duration-300 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700   dark:hover:text-white md:dark:hover:bg-transparent"
              }
            >
              Product Manage
            </NavLink>
          </li>
          <li>
            <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <button onClick={() => setOpenCart(true)}>
                <GrCart />
              </button>

              <Cart openCart={openCart} setOpenCart={setOpenCart} />
            </a>
          </li>
        </ul>
      </div>

      {/* mobile menu */}
      <Transition show={isOpenMenu}>
        <div
          className="transition duration-300 ease-in data-[closed]:opacity-0 w-full md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "block py-2 px-3 text-gray-900 hover:bg-gray-300 rounded md:bg-transparent md:text-blue-700 md:p-0"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "block py-2 px-3 text-gray-900 hover:bg-gray-300 rounded md:bg-transparent md:text-blue-700 md:p-0"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products-management"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded md:bg-transparent md:text-blue-700 md:p-0"
                    : "block py-2 px-3 text-gray-900 hover:bg-gray-300 rounded md:bg-transparent md:text-blue-700 md:p-0"
                }
              >
                Product Managment
              </NavLink>
            </li>

          </ul>
        </div>
      </Transition>
    </>
  );
};

export default NavMenu;
