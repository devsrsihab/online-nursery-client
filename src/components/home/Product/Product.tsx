import { StarIcon } from "@heroicons/react/20/solid";
import { TProduct } from "../../../types";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const Product = ({ product }: { product: TProduct }) => {
  const { id, name, price, rating, reviewCount, imageAlt, href, imageSrc } =
    product;

  return (
    <div
      key={id}
      className="group relative border-r border-b border-gray-200 p-4 sm:p-6"
    >
      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="pt-10 pb-4 text-center">
        <h3 className="text-sm font-medium text-gray-900">
          <a href={href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          </a>
        </h3>
        <div className="mt-3 flex flex-col items-center">
          <p className="sr-only">{rating} out of 5 stars</p>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  product.rating > rating ? "text-yellow-400" : "text-gray-200",
                  "flex-shrink-0 h-5 w-5"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mt-1 text-sm text-gray-500">{reviewCount} reviews</p>
        </div>
        <p className="mt-4 text-base font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
};

export default Product;
