import { PlusIcon } from "@heroicons/react/16/solid";
import React from "react";
import Modal from "../Modal";
import CreateGroupForm from "./CreateGroupForm";

const CreateGroupModal = () => {
  return (
    <Modal
      buttonContent={
        <>
          <PlusIcon className="size-5 mr-1 fill-gray-300" /> New
        </>
      }
    >
      {/*  @ts-expect-error: Suppress error for missing props*/}
      <CreateGroupForm />
    </Modal>
  );
};

export default CreateGroupModal;
