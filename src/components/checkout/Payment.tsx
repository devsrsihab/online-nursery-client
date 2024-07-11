const Payment = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        Payment
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="credit-card"
                aria-describedby="credit-card-text"
                type="radio"
                name="payment-method"
                defaultValue=""
                className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                defaultChecked={true}
              />
            </div>
            <div className="ms-4 text-sm">
              <label
                htmlFor="credit-card"
                className="font-medium leading-none text-gray-900 dark:text-white"
              >
                {" "}
                Credit Card{" "}
              </label>
              <p
                id="credit-card-text"
                className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
              >
                Pay with your credit card
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Delete
            </button>
            <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700" />
            <button
              type="button"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="pay-on-delivery"
                aria-describedby="pay-on-delivery-text"
                type="radio"
                name="payment-method"
                defaultValue=""
                className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
              />
            </div>
            <div className="ms-4 text-sm">
              <label
                htmlFor="pay-on-delivery"
                className="font-medium leading-none text-gray-900 dark:text-white"
              >
                {" "}
                Payment on delivery{" "}
              </label>
              <p
                id="pay-on-delivery-text"
                className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
              >
                +$15 payment processing fee
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Delete
            </button>
            <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700" />
            <button
              type="button"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="paypal-2"
                aria-describedby="paypal-text"
                type="radio"
                name="payment-method"
                defaultValue=""
                className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
              />
            </div>
            <div className="ms-4 text-sm">
              <label
                htmlFor="paypal-2"
                className="font-medium leading-none text-gray-900 dark:text-white"
              >
                {" "}
                Paypal account{" "}
              </label>
              <p
                id="paypal-text"
                className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
              >
                Connect to your account
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Delete
            </button>
            <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700" />
            <button
              type="button"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
