import { useState } from "react";
import { useGetAllProductsQuery } from "../../../redux/features/product/productApi";
import { TProduct } from "../../../types";
import Pagination from "../../shared/Pagination";
import SectionTitle from "../../shared/SectionTitle";
import ProductSearchAndFilter from "../ProductSearchAndFilter";
import Product from "./Product";

const Products = () => {
  const [pagenumber, setPageNumber] = useState<number | null>(null);
  const [itemlimit, setItemlimit] = useState<number | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  const { data } = useGetAllProductsQuery({
    page: pagenumber,
    limit: itemlimit,
    category,
  });
  const { products }: { products: TProduct[] } = data?.data ?? [];
  const { totalItems } = data?.data ?? 10;
  console.log(products);
  return (
    <div className="bg-white py-24">
      <SectionTitle
        firstText="Discover"
        highlightText="Nature's"
        lastText="Product"
        detailsText="Enhance your environment with majestic trees that serve as living canvases of natural elegance"
      />
      <ProductSearchAndFilter setCategory={setCategory} />
      <div className="mx-auto max-w-full overflow-hidden ">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <div className="flex justify-center">
          <Pagination
            setPageNumber={setPageNumber}
            setItemlimit={setItemlimit}
            totalItems={totalItems}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
