import { TrashIcon } from "@heroicons/react/16/solid";
import Modal from "../Modal";
import DeleteGroupDialog from "./DeleteGroupDialog";

const DeleteGroupModal = () => {
  return (
    <Modal
      buttonType="menu"
      buttonContent={
        <>
          <TrashIcon className="size-5 fill-white/30" />
          Delete
        </>
      }
      XMarkShown={false}
    >
      {/*  @ts-expect-error: Suppress error for missing props*/}
      <DeleteGroupDialog />
    </Modal>
  );
};

export default DeleteGroupModal;
