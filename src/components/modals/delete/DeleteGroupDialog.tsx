import { Button, DialogTitle } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/16/solid";
import { ModalActionProps } from "../types";

const DeleteGroupDialog = ({ close }: ModalActionProps) => {
  return (
    <>
      <DialogTitle as="h3" className="text-base/7 font-medium text-white">
        Delete Task Group
      </DialogTitle>
      <p className="mt-2 text-sm/6 text-white/50">
        Are you sure you want to delete this?
      </p>
      <div className="mt-4 flex items-center space-x-3">
        <Button
          className="inline-flex items-center gap-2 rounded-md bg-red-700 w-24 text-center py-1.5 px-3 text-sm/6 font-semibold text-gray-400 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-600 data-[open]:bg-red-700 data-[focus]:outline-1 data-[focus]:outline-red-500"
          onClick={close}
        >
          <TrashIcon className="size-6 fill-gray-300 mx-auto" />
        </Button>
        <Button
          className="inline-flex items-center gap-2 rounded-md bg-gray-700 w-24 text-center py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
          onClick={close}
        >
          <span className="block mx-auto">Cancel</span>
        </Button>
      </div>
    </>
  );
};

export default DeleteGroupDialog;
