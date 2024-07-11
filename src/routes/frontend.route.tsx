import CartPage from "../pages/CartPage ";
import Checkout from "../pages/Checkout";
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
    path: "/carts",
    element: <CartPage />,
  },
  {
    name: "Checkout",
    path: "/checkout",
    element: <Checkout />,
  },
];
