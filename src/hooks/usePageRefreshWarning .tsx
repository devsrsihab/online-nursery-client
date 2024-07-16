import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";

const usePageRefreshWarning = () => {
  const { cart } = useAppSelector((state) => state.cart);

  useEffect(() => {
    console.log("Cart State:", cart); // Debugging cart state

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cart.length > 0) {
        const message =
          "You have items in your cart. Are you sure you want to leave?";
        event.preventDefault(); // Prevent the default action
        event.returnValue = message; // Set the returnValue for older browsers
        return message; // Return message for some older browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cart]);
};

export default usePageRefreshWarning;
