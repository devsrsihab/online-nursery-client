import { Link } from "react-router-dom";
import { TProduct } from "../../../types";
import CustomRating from "../../shared/Rating";
import { useAppDispatch } from "../../../redux/hooks";
import { addToCart } from "../../../redux/features/product/cartSlice";

const Product = ({ product }: { product: TProduct }) => {
  const { _id, title, price, rating, image } = product;
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-3 px-3 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
          <Link to={`/products/${_id}`}>
            <div className="relative">
              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                <img
                  src={image}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative mt-4">
                <a>
                  <h3 className="text-sm font-medium text-gray-900">{title}</h3>
                </a>
                <p className="mt-1 text-sm text-gray-500">
                  <CustomRating rating={rating} />
                </p>
              </div>
              <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                />
                <p className="relative text-lg font-semibold text-white">
                  {price}
                </p>
              </div>
            </div>
          </Link>
          <div className="mt-6">
            <a
              onClick={() => dispatch(addToCart(product))}
              className="relative cursor-pointer flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
