import { Tab } from "@headlessui/react";
import Loader from "../components/shared/Loader";
import { useEditProductsQuery } from "../redux/features/product/productApi";
import { useParams } from "react-router-dom";
import CustomRating from "../components/shared/Rating";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useEditProductsQuery(id);

  const product = data?.data || [];
  console.log(product);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white mt-[8%]">
      <div className="mx-auto max-w-2xl py-10 px-4 sm:py-16  sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            <Tab.Panels className="w-full">
              <Tab.Panel>
                <div className="relative w-full">
                  <img
                    src={product?.image}
                    alt={product?.name}
                    className="w-full h-64 sm:h-80 lg:h-96 object-contain object-center sm:rounded-lg"
                  />
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>

          {/* Product? info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product?.title}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product? information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product?.price}
              </p>
            </div>

            <div className="mt-3 flex gap-2">
              <h2 className="sr-only">Product Category</h2>
              <p className="text-lg tracking-tight text-gray-900">Category:</p>
              <p className="text-lg font-semibold tracking-tight text-gray-900">
                {product?.category}
              </p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  <CustomRating rating={product?.rating} />
                </div>
                <p className="sr-only">{product?.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product?.description }}
              />
            </div>

            <div className="sm:flex-col1 mt-10 flex">
              <button
                type="submit"
                className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
