const Category = () => {
  return (
    <div className="mx-auto max-w-2xl py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl ">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="py-5 mb-5">
        <a href="#">
          <h5 className="text-sm font-medium text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
      </div>
    </div>
  );
};

export default Category;
