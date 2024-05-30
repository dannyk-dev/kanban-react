import {
  Button,
  Transition,
  Dialog,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";

type DeleteGroupModalProps = {
  buttonContent: React.ReactNode;
};

const DeleteGroupModal = ({ buttonContent }: DeleteGroupModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-600 hover:bg-gray-600"
      >
        {buttonContent}
      </Button>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          {/* <div
            className={
              isOpen
                ? "absolute top-0 right-0 left-0 bottom-0 bg-slate-950/90 z-10 blur-2xl"
                : ""
            }
          > */}
          <div className="fixed inset-0  w-screen overflow-y-auto bg-slate-950/80 ">
            <div className="flex min-h-full z-20 items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-white"
                  >
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
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
          {/* </div> */}
        </Dialog>
      </Transition>
    </>
  );
};

export default DeleteGroupModal;
