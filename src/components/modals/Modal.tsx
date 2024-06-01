import {
  Button,
  Transition,
  Dialog,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { ModalProps, ModalActionProps, Buttons } from "./types";

const Modal = ({
  buttonType = "standard",
  buttonContent,
  children,
  XMarkShown = true,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const actions: ModalActionProps = {
    isOpen,
    open,
    close,
    setIsOpen,
  };

  return (
    <>
      <Button onClick={open} className={Buttons[buttonType]}>
        {buttonContent || "Button"}
      </Button>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen bg-slate-950/80 overflow-y-auto">
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
                  {XMarkShown && (
                    <Button
                      className="block absolute top-5 right-5"
                      onClick={close}
                    >
                      <XMarkIcon className="size-8 fill-gray-300" />
                    </Button>
                  )}
                  {React.cloneElement(children, { ...actions })}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Modal;
