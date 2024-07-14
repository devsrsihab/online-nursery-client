import { Field, Select } from "@headlessui/react";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

// Define types for the props
type PaginationProps = {
  setPageNumber: (page: number) => void;
  setItemlimit: (limit: number) => void;
  totalItems: number; // Add totalItems as a prop
};

const Pagination = ({
  setPageNumber,
  setItemlimit,
  totalItems,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [itemLimit, setItemLimit] = useState(10); // Default items per page
  const [totalPages, setTotalPages] = useState(1); // Track total pages

  useEffect(() => {
    // Calculate total pages whenever totalItems or itemLimit changes
    setTotalPages(Math.ceil(totalItems / itemLimit));
  }, [totalItems, itemLimit]);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setPageNumber(page);
  };

  return (
    <>
      <div className="flex gap-2 items-center">
        <nav
          style={{ marginTop: "2rem" }}
          aria-label="Page my-5 navigation example"
        >
          <ul className="inline-flex space-x-[1rem] text-base h-10">
            <li>
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => handlePageChange(index + 1)} // Page number is index + 1
                  className={clsx(
                    "flex items-center justify-center px-4 h-10 leading-tight",
                    {
                      "text-white bg-primary600 border border-primary600":
                        currentPage === index + 1,
                      "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700":
                        currentPage !== index + 1,
                    }
                  )}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
        <Field className="mt-8">
          <div>
            <Select
              className={clsx(
                "block w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-8 text-sm text-gray-700",
                "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              )}
              defaultValue={itemLimit.toString()}
              onChange={(e) => {
                const limit = parseInt(e.target.value, 10);
                setItemLimit(limit);
                setItemlimit(limit);
                setCurrentPage(1); // Reset to first page when item limit changes
              }}
            >
              <option value="">Select Number of Items</option>
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </Select>
            <ChevronDownIcon
              className="pointer-events-none absolute top-2.5 right-2.5 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
          </div>
        </Field>
      </div>
    </>
  );
};

export default Pagination;
