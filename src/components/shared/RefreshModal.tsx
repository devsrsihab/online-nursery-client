import { Dialog } from "@headlessui/react";

interface RefreshWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const RefreshWarningModal: React.FC<RefreshWarningModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-30" onClick={onClose} />
        <div className="bg-white rounded-lg p-6 mx-4 max-w-sm">
          <Dialog.Title className="text-lg font-medium text-gray-900">
            Unsaved Changes
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-600">
            You have items in your cart. Are you sure you want to refresh the
            page? Your cart data may be lost.
          </Dialog.Description>
          <div className="mt-4 flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm(); // Call the onConfirm function to refresh
              }}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default RefreshWarningModal;
