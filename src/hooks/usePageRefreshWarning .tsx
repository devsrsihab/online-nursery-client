import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";

const usePageRefreshWarning = () => {
  const { cart } = useAppSelector((state) => state.cart);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cart.length > 0) {
        const message =
          "You have items in your cart. Are you sure you want to leave?";
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cart]);
};

export default usePageRefreshWarning;
