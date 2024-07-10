import CartPage from "../pages/CartPage ";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

export const fronendPaths = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Shop",
    path: "/shop",
    element: <Shop />,
  },
  {
    name: "Cart",
    path: "/cart",
    element: <CartPage />,
  },
];
