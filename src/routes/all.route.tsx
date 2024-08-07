import CartPage from "../pages/CartPage ";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import ProductManagement from "../pages/ProductManagement";
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
    name: "Products Management",
    path: "/products-management",
    element: <ProductManagement />,
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
  {
    name: "Product Details",
    path: "/products/:id",
    element: <ProductDetails />,
  },
];
