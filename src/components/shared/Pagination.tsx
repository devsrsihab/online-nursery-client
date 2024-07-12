const Pagination = () => {
  return (
    <>
      <>
        <nav
          style={{ marginTop: "2rem" }}
          aria-label="Page my-5 navigation example"
        >
          <ul className="inline-flex space-x-[1rem] text-base h-10">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-primary600"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-primary600 border border-white "
              >
                2
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-s-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </>
    </>
  );
};

export default Pagination;
