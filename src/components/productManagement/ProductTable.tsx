import { BsPencilSquare, BsTrash3 } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { useState } from "react";
import CreateProductModal from "./CreateProduct/CreateProductModal";
import EditProductModal from "./EditProduct/EditProductModal";
import { useGetAllProductsQuery } from "../../redux/features/product/productApi";
import { TProduct } from "../../types";
import Loader from "../shared/Loader";

const ProductTable = () => {
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState<string | null>(
    null
  );
  const [productIdToUpdate, setProductIdToUpdate] = useState<string | null>(
    null
  );

  const { data, isLoading, error } = useGetAllProductsQuery(undefined);
  const products = data?.data ?? [];
  // console.log(products);

  if (isLoading) {
    console.log("loading data...");
  }

  return (
    <div className="bg-[#f3f4f6] px-4 py-12 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
      {/* confirmation delete modal */}
      <ConfirmDeleteModal
        confirmDeleteModal={confirmDeleteModal}
        setConfirmDeleteModal={setConfirmDeleteModal}
        productId={productIdToDelete ? productIdToDelete : ""}
      />
      {/* Create modal */}
      <CreateProductModal openForm={openForm} setOpenForm={setOpenForm} />
      <EditProductModal
        openEditForm={openEditForm}
        setOpenEditForm={setOpenEditForm}
        productId={productIdToUpdate ? productIdToUpdate : ""}
      />

      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Product Management
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your product esily from here and Make CRUD operation esily
            with this table
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            onClick={() => setOpenForm(true)}
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add New Product
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Image
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Rating
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Brand
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Stock
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      Action
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody
                  className={`${
                    isLoading && "animate-pulse h-24"
                  }  relative divide-y divide-gray-200 bg-white`}
                >
                  {isLoading && <Loader />}
                  {error ? (
                    <tr>
                      <td
                        colSpan={9}
                        className="text-center py-4 text-sm text-red-500"
                      >
                        Something Went Wrong
                      </td>
                    </tr>
                  ) : (
                    products.map((product: TProduct, index: number) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {product.title}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          <img
                            className="h-20 w-20"
                            src={product.image}
                            alt="product-img"
                          />
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {product.price}
                        </td>
                        <td className="whitespace-pre-wrap px-3 py-4 text-sm text-gray-500">
                          {product.description}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {product.category}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {product.brand}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {product.rating}
                        </td>

                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {product.stock}
                        </td>
                        <td className="flex items-center gap-3 relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button
                            onClick={() => {
                              setOpenEditForm(true);
                              setProductIdToUpdate(product._id);
                            }}
                            className="text-green-600 text-xl hover:text-green-900"
                          >
                            <BsPencilSquare />
                          </button>
                          <button className="text-xl text-black hover:text-black/30">
                            <IoEyeOutline />
                          </button>
                          <button
                            onClick={() => {
                              setConfirmDeleteModal(true);
                              setProductIdToDelete(product._id);
                            }}
                            className="text-xl text-red-600 hover:text-red-900"
                          >
                            <BsTrash3 />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
