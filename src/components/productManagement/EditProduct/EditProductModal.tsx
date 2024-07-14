import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TProduct } from "../../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  useEditProductsQuery,
  useUpdateProductsMutation,
} from "../../../redux/features/product/productApi";
import { toast } from "sonner";

interface UpdateModalProps {
  openEditForm: boolean;
  setOpenEditForm: (value: boolean) => void;
  productId: string;
}

const EditProductModal = ({
  openEditForm,
  setOpenEditForm,
  productId,
}: UpdateModalProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TProduct>();

  const { data } = useEditProductsQuery(productId);
  const [updateProducts] = useUpdateProductsMutation();

  // set form value
  useEffect(() => {
    const product = data?.data ?? [];

    setValue("title", product.title);
    setValue("price", product.price);
    setValue("description", product.description);
    setValue("category", product.category);
    setValue("image", product.image);
    setValue("brand", product.brand);
    setValue("rating", product.rating);
    setValue("stock", product.stock);
  }, [data, setValue]);

  // handle edit product
  const handleEditProduct: SubmitHandler<TProduct> = async (data) => {
    const payload = {
      ...data,
      price: Number(data.price),
      rating: Number(data.rating),
      stock: Number(data.stock),
    };
    const id = productId;
    try {
      const response = await updateProducts({ id, payload });
      toast.success("Product has been Updated");
      setOpenEditForm(false);
      console.log("Update response:", response);
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  return (
    <Transition.Root show={openEditForm} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={setOpenEditForm}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Edit Product
                    </Dialog.Title>
                    <div className="mt-2">
                      <form onSubmit={handleSubmit(handleEditProduct)}>
                        <div className="space-y-5">
                          <div className="mb-5 text-left">
                            <input
                              type="text"
                              className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                              placeholder="Title"
                              {...register("title", {
                                required: "Title is required.",
                              })}
                            />
                            {errors.title &&
                              typeof errors.title.message === "string" && (
                                <span className="text-red-500 text-xs italic">
                                  {errors.title.message}
                                </span>
                              )}
                          </div>

                          <div className="mb-5 text-left">
                            <input
                              type="number"
                              step="any"
                              className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                              placeholder="Price"
                              {...register("price", {
                                required: "Price is required.",
                              })}
                            />
                            {errors.price &&
                              typeof errors.price.message === "string" && (
                                <span className="text-red-500 text-xs italic">
                                  {errors.price.message}
                                </span>
                              )}
                          </div>

                          <div className="mb-5 text-left">
                            <textarea
                              className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                              placeholder="Description"
                              {...register("description", {
                                required: "Description is required.",
                              })}
                            />
                            {errors.description &&
                              typeof errors.description.message ===
                                "string" && (
                                <span className="text-red-500 text-xs italic">
                                  {errors.description.message}
                                </span>
                              )}
                          </div>

                          <div className="mb-5 text-left">
                            <input
                              type="text"
                              className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                              placeholder="Category"
                              {...register("category", {
                                required: "Category is required.",
                              })}
                            />
                            {errors.category &&
                              typeof errors.category.message === "string" && (
                                <span className="text-red-500 text-xs italic">
                                  {errors.category.message}
                                </span>
                              )}
                          </div>

                          <div className="mb-5 text-left">
                            <input
                              type="number"
                              step="any"
                              min={1}
                              className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                              placeholder="Rating"
                              {...register("rating", {
                                required: "Rating is required.",
                              })}
                            />
                            {errors.rating &&
                              typeof errors.rating.message === "string" && (
                                <span className="text-red-500 text-xs italic">
                                  {errors.rating.message}
                                </span>
                              )}
                          </div>

                          <div className="mb-5 text-left">
                            <input
                              type="text"
                              className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                              placeholder="Image URL"
                              {...register("image", {
                                required: "Image URL is required.",
                                pattern: {
                                  value:
                                    /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}([/\w .-]*)*\/?$/,
                                  message: "Please enter a valid image URL",
                                },
                              })}
                            />
                            {errors.image &&
                              typeof errors.image.message === "string" && (
                                <span className="text-red-500 text-xs italic">
                                  {errors.image.message}
                                </span>
                              )}
                          </div>

                          <div className="mb-5 text-left">
                            <input
                              type="text"
                              className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                              placeholder="Brand"
                              {...register("brand", {
                                required: "Brand is required.",
                              })}
                            />
                            {errors.brand &&
                              typeof errors.brand.message === "string" && (
                                <span className="text-red-500 text-xs italic">
                                  {errors.brand.message}
                                </span>
                              )}
                          </div>

                          <div className="mb-5 text-left">
                            <input
                              type="number"
                              className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                              placeholder="Stock"
                              {...register("stock", {
                                required: "Stock is required.",
                              })}
                            />
                            {errors.stock &&
                              typeof errors.stock.message === "string" && (
                                <span className="text-red-500 text-xs italic">
                                  {errors.stock.message}
                                </span>
                              )}
                          </div>
                        </div>

                        <div className="mt-5 justify-end sm:mt-6 flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3">
                          <button
                            type="button"
                            className="inline-flex justify-center w-full sm:w-auto rounded-md border border-transparent bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:text-sm"
                            onClick={() => setOpenEditForm(false)}
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="inline-flex justify-center w-full sm:w-auto rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                            // onClick={() => setOpenEditForm(false)}
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default EditProductModal;
