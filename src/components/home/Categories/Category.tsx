const Category = ({name , image}: {name: string, image: string}) => {
  return (
    <div className="mx-auto max-w-2xl py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl ">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={image}
          alt=""
        />
      </a>
      <div className="py-5 mb-5">
        <a href="#">
          <h5 className="text-lg font-medium text-gray-900">
            {name}
          </h5>
        </a>
      </div>
    </div>
  );
};

export default Category;
