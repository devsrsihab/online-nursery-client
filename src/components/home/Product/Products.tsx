import { useState } from "react";
import { useGetAllProductsQuery } from "../../../redux/features/product/productApi";
import { TProduct } from "../../../types";
import Pagination from "../../shared/Pagination";
import SectionTitle from "../../shared/SectionTitle";
import ProductSearchAndFilter from "../ProductSearchAndFilter";
import Product from "./Product";
import Loader from "../../shared/Loader";

const Products = () => {
  const [pagenumber, setPageNumber] = useState<number | null>(1); // Default to 1
  const [itemlimit, setItemlimit] = useState<number | null>(10); // Default limit
  const [category, setCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const { data, isLoading } = useGetAllProductsQuery({
    page: pagenumber,
    limit: itemlimit,
    category,
    searchTerm,
  });

  const products: TProduct[] = data?.data?.products || [];
  const totalItems = data?.data?.totalItems || 0; // Updated to use API response

  return (
    <div className="bg-white py-24">
      <SectionTitle
        firstText="Discover"
        highlightText="Nature's"
        lastText="Product"
        detailsText="Enhance your environment with majestic trees that serve as living canvases of natural elegance"
      />
      <ProductSearchAndFilter
        setCategory={setCategory}
        setSearchTerm={setSearchTerm}
      />
      <div className="mx-auto max-w-full overflow-hidden ">
        <h2 className="sr-only">Products</h2>

        <div
          className={`relative ${
            isLoading && "animate-pulse h-24"
          } grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4`}
        >
          {isLoading && <Loader />}
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <div className="flex justify-center">
          <Pagination
            setPageNumber={setPageNumber}
            setItemlimit={setItemlimit}
            totalItems={totalItems} // Use actual total items from API
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
