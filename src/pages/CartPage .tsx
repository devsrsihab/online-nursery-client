import CartList from "../components/cart/CartList";
import OrderSummary from "../components/cart/OrderSummary";

const CartPage = () => {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping CartPage
        </h2>
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <CartList />
          <OrderSummary />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
