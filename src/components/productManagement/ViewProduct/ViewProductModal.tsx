import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useEditProductsQuery } from "../../../redux/features/product/productApi";

interface UpdateModalProps {
  openViewForm: boolean;
  setOpenViewForm: (value: boolean) => void;
  productId: string;
}

const ViewProductModal = ({
  openViewForm,
  setOpenViewForm,
  productId,
}: UpdateModalProps) => {
  const { data } = useEditProductsQuery(productId);
  console.log("edit product data", data);

  return (
    <Transition.Root show={openViewForm} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={setOpenViewForm}>
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
                      View Product
                    </Dialog.Title>
                    <div className="mt-2">
                      {data && (
                        <div>
                          <div className="mb-4">
                            <img
                              src={data?.data?.image}
                              alt={data?.data?.title}
                              className="w-full h-auto rounded-lg max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]"
                            />
                          </div>

                          <div className="text-left space-y-2">
                            <p>
                              <strong>Title:</strong> {data?.data?.title}
                            </p>
                            <p>
                              <strong>Price:</strong> ${data?.data?.price}
                            </p>
                            <p>
                              <strong>Description:</strong>{" "}
                              {data?.data?.description}
                            </p>
                            <p>
                              <strong>Category:</strong> {data?.data?.category}
                            </p>
                            <p>
                              <strong>Rating:</strong> {data?.data?.rating}
                            </p>
                            <p>
                              <strong>Brand:</strong> {data?.data?.brand}
                            </p>
                            <p>
                              <strong>Stock:</strong> {data?.data?.stock}
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="mt-5 justify-end sm:mt-6 flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3">
                        <button
                          type="button"
                          className="inline-flex justify-center w-full sm:w-auto rounded-md border border-transparent bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:text-sm"
                          onClick={() => setOpenViewForm(false)}
                        >
                          Close
                        </button>
                      </div>
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

export default ViewProductModal;
