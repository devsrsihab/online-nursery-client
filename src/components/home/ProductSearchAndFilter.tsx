import { useRef } from "react";

type ProductFilterProps = {
  setCategory: (page: string) => void;
  setSearchTerm: (page: string) => void;
};

const ProductSearchAndFilter = ({
  setCategory,
  setSearchTerm,
}: ProductFilterProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchInputRef.current && setSearchTerm(searchInputRef.current.value);
    // console.log(searchInputRef.current?.value);
  };

  return (
    <div className="mb-10 w-full">
      <div className="flex flex-col">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow">
          <form onSubmit={handleSearch}>
            <div className="filter_div flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/5 mb-4 md:mb-0">
                <select
                  id="manufacturer"
                  onChange={(e) => setCategory(e.target.value)}
                  className="block w-full rounded-md border border-gray-100 bg-gray-100 py-3 px-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option value="" disabled selected>
                    Select Category
                  </option>
                  <option value="Hibiscus">Hibiscus</option>
                  <option value="Hosta">Hosta</option>
                  <option value="Lavender">Lavender</option>
                  <option value="Grass">Grass</option>
                  <option value="Daylily">Daylily</option>
                  <option value="Clematis">Clematis</option>
                  <option value="Rose">Rose</option>
                  <option value="Peony">Peony</option>
                </select>
              </div>
              <div className="relative flex w-full md:w-4/5 items-center">
                <svg
                  className="absolute left-2 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={11} cy={11} r={8} />
                  <line x1={21} y1={21} x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="name"
                  name="search"
                  ref={searchInputRef}
                  className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none  focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  placeholder="Search by name, type, manufacturer, etc"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-4">
              <button className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">
                Reset
              </button>
              <button
                type="submit"
                className="rounded-lg bg-primary px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchAndFilter;
