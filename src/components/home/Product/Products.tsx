import { TProduct } from "../../../types";
import Pagination from "../../shared/Pagination";
import SectionTitle from "../../shared/SectionTitle";
import ProductSearchAndFilter from "../ProductSearchAndFilter";
import Product from "./Product";

const products: TProduct[] = [
  {
    id: 1,
    name: "Organize Basic Set (Walnut)",
    price: "$149",
    rating: 2.5,
    reviewCount: 38,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 1,
    name: "Organize Basic Set (Walnut)",
    price: "$149",
    rating: 2.5,
    reviewCount: 38,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 1,
    name: "Organize Basic Set (Walnut)",
    price: "$149",
    rating: 2.5,
    reviewCount: 38,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 2,
    name: "Organize Pen Holder",
    price: "$15",
    rating: 5,
    reviewCount: 18,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 3,
    name: "Organize Sticky Note Holder",
    price: "$15",
    rating: 2,
    reviewCount: 14,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 4,
    name: "Organize Phone Holder",
    price: "$15",
    rating: 4,
    reviewCount: 21,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  // More products...
];

const Products = () => {
  return (
    <div className="bg-white py-24">
      <SectionTitle
        firstText="Discover"
        highlightText="Nature's"
        lastText="Canvas"
        detailsText="Enhance your environment with majestic trees that serve as living canvases of natural elegance"
      />
      <ProductSearchAndFilter />
      <div className="mx-auto max-w-full overflow-hidden ">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
        <div className="flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Products;
