const DeliveryDetails = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label
          htmlFor="your_name"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Your name
        </label>
        <input
          type="text"
          id="your_name"
          className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500`} // Remove all dark prefixed classes
          placeholder="Bonnie Green"
          required={true}
        />
      </div>
      <div>
        <label
          htmlFor="your_email"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Your email*
        </label>
        <input
          type="email"
          id="your_email"
          className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500`} // Remove all dark prefixed classes
          placeholder="name@flowbite.com"
          required={true}
        />
      </div>

      <div>
        <div className="mb-2 flex items-center gap-2">
          <label
            htmlFor="select-country-input-3"
            className="block text-sm font-medium text-gray-900"
          >
            Country*
          </label>
        </div>
        <select
          id="select-country-input-3"
          className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500`} // Removed all dark prefixed classes
        >
          <option selected={true}>United States</option>
          <option value="AS">Australia</option>
          <option value="FR">France</option>
          <option value="ES">Spain</option>
          <option value="UK">United Kingdom</option>
        </select>
      </div>
      <div>
        <div className="mb-2 flex items-center gap-2">
          <label
            htmlFor="select-city-input-3"
            className="block text-sm font-medium text-gray-900"
          >
            City*
          </label>
        </div>
        <select
          id="select-city-input-3"
          className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500`} // Removed all dark prefixed classes
        >
          <option selected={true}>San Francisco</option>
          <option value="NY">New York</option>
          <option value="LA">Los Angeles</option>
          <option value="CH">Chicago</option>
          <option value="HU">Houston</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="company_name"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Company name
        </label>
        <input
          type="text"
          id="company_name"
          className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500`} // Removed all dark prefixed classes
          placeholder="Flowbite LLC"
          required={true}
        />
      </div>
      <div>
        <label
          htmlFor="vat_number"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          VAT number
        </label>
        <input
          type="text"
          id="vat_number"
          className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500`} // Removed all dark prefixed classes
          placeholder="DE42313253"
          required={true}
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className={` font-primary flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary600  focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100`}
        >
          <svg
            className="h-5 w-5"
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
              d="M5 12h14m-7 7V5"
            />
          </svg>
          Add new address
        </button>
      </div>
    </div>
  );
};

export default DeliveryDetails;
