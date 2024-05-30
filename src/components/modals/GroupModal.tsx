import {
  Button,
  Transition,
  Dialog,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import CreateGroupForm from "./CreateGroupForm";

const GroupModal = () => {
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
        className="flex items-center self-end mb-1 ml-3 rounded-md bg-gray-700 py-2.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        <PlusIcon className="size-4 fill-gray-300" />
      </Button>

      <Transition appear show={isOpen}>
        <div
          className={
            isOpen ? "absolute inset-0 bg-slate-950/60 z-10 blur-2xl" : ""
          }
        >
          <Dialog
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={close}
          >
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <TransitionChild
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 transform-[scale(95%)]"
                  enterTo="opacity-100 transform-[scale(100%)]"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 transform-[scale(100%)]"
                  leaveTo="opacity-0 transform-[scale(95%)]"
                >
                  <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-4 backdrop-blur-2xl">
                    <Button
                      className="block absolute top-5 right-5"
                      onClick={close}
                    >
                      <XMarkIcon className="size-8 fill-gray-300" />
                    </Button>
                    <CreateGroupForm onCompleteMutation={close} />
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </div>
      </Transition>
    </>
  );
};

export default GroupModal;
