import React, {
  createContext,
  useEffect,
  useContext,
  useState,
  ReactNode,
} from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

type UnloadContextType = {
  setShouldConfirmUnload: React.Dispatch<React.SetStateAction<boolean>>;
};

const UnloadContext = createContext<UnloadContextType | undefined>(undefined);

type UnloadProviderProps = {
  children: ReactNode;
  message: string;
};

export const UnloadProvider: React.FC<UnloadProviderProps> = ({
  children,
  message,
}) => {
  const [shouldConfirmUnload, setShouldConfirmUnload] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    if (shouldConfirmUnload) {
      event.preventDefault();
      event.returnValue = message;
      setIsDialogOpen(true);
      return message;
    }
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [message, shouldConfirmUnload]);

  const confirmUnload = () => {
    setIsDialogOpen(false);
    setShouldConfirmUnload(false);
    window.removeEventListener("beforeunload", handleBeforeUnload);
    window.location.reload();
  };

  const cancelUnload = () => {
    setIsDialogOpen(false);
    setShouldConfirmUnload(false);
  };

  return (
    <UnloadContext.Provider value={{ setShouldConfirmUnload }}>
      {children}
      <Dialog
        open={isDialogOpen}
        onClose={cancelUnload}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <DialogBackdrop className="fixed inset-0 bg-black opacity-30" />
        <div className="flex items-center justify-center min-h-screen">
          <DialogPanel className="bg-white p-6 rounded-lg shadow-xl">
            <DialogTitle className="text-lg font-medium text-gray-900">
              Confirmation
            </DialogTitle>
            <div className="mt-4">
              <p>{message}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={cancelUnload}
                className="mr-4 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={confirmUnload}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
              >
                Confirm
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </UnloadContext.Provider>
  );
};

export const useUnloadConfirmation = () => {
  const context = useContext(UnloadContext);
  if (!context) {
    throw new Error(
      "useUnloadConfirmation must be used within an UnloadProvider"
    );
  }
  return context;
};
