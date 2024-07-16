import { useAppSelector } from "../../redux/hooks";
import { TProduct } from "../../types";
import CartItem from "./CartItem";

const CartList = () => {
  const { cart: products }: { cart: TProduct[] } = useAppSelector(
    (state) => state.cart
  );

  return (
    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
      <div className="space-y-6">
        <div className="rounded-lg space-y-4 border shadow-md border-gray-200 bg-white p-4 md:p-6">
          {products.map((product) => (
            <CartItem key={product._id} product={product} />
          ))}
          {products.length === 0 && (
            <p className="text-center text-lg">No products</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartList;
