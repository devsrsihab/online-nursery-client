import { SubmitHandler, useForm } from "react-hook-form";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { CreateFormProps, TProduct } from "../../../types";
import { useAddProductsMutation } from "../../../redux/features/product/productApi";
import { toast } from "sonner";

const CreateForm = ({ setOpenForm }: CreateFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>();

  const [addProducts] = useAddProductsMutation();

  const handleCreateProduct: SubmitHandler<TProduct> = async (payload) => {
    setOpenForm(false);
    console.log(payload);
    const productData = {
      ...payload,
      price: Number(payload.price),
      rating: Number(payload.rating),
      stock: Number(payload.stock),
    };

    try {
      const response = await addProducts(productData);
      toast.success("Product has been created");
      console.log("Create response:", response);
    } catch (error) {
      console.error("Failed to Create product:", error);
    }
  };

  return (
    <>
      <div>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Create product
          </Dialog.Title>
          <div className="mt-2">
            <form onSubmit={handleSubmit(handleCreateProduct)}>
              <div className="space-y-5">
                <div className="mb-5 text-left">
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="Title"
                    {...register("title", { required: "Title is required." })}
                  />
                  {errors.title && typeof errors.title.message === "string" && (
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
                    {...register("price", { required: "Price is required." })}
                  />
                  {errors.price && typeof errors.price.message === "string" && (
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
                    typeof errors.description.message === "string" && (
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
                    {...register("rating", { required: "Rating is required." })}
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
                  {errors.image && typeof errors.image.message === "string" && (
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
                    {...register("brand", { required: "Brand is required." })}
                  />
                  {errors.brand && typeof errors.brand.message === "string" && (
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
                    {...register("stock", { required: "Stock is required." })}
                  />
                  {errors.stock && typeof errors.stock.message === "string" && (
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
                  onClick={() => setOpenForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center w-full sm:w-auto rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateForm;
