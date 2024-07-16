import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { removeFromCart } from "../../redux/features/product/cartSlice";
import { TProduct } from "../../types";

const CartItem = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(product.quantity || 1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 100));
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1)); 
  };

  const handleRemove = () => {
    dispatch(removeFromCart({ _id: product._id }));
  };

  return (
    <div className="md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
      <a href="#" className="shrink-0 md:order-1">
        <img className="h-20 w-20" src={product.image} alt={product.title} />
      </a>
      <div className="flex items-center justify-between md:order-3 md:justify-end">
        <div className="flex items-center">
          <button
            onClick={handleDecrement}
            type="button"
            className="inline-flex h-5 w-5 ..."
          >
            {/* Decrement Button SVG */}
            <svg
              className="h-2.5 w-2.5 text-gray-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="number"
            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
            value={quantity}
            min="1" // Prevents negative values
            readOnly
          />
          <button
            onClick={handleIncrement}
            type="button"
            className="inline-flex h-5 w-5 ..."
          >
            {/* Increment Button SVG */}
            <svg
              className="h-2.5 w-2.5 text-gray-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
        <div className="text-end md:order-4 md:w-32">
          <p className="text-base font-bold text-gray-900">${product.price}</p>
        </div>
      </div>
      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
        <a
          href="#"
          className="text-base font-medium text-gray-900 hover:underline"
        >
          {product.title}
        </a>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
            onClick={handleRemove}
          >
            {/* Remove Button SVG */}
            <svg
              className="me-1.5 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;