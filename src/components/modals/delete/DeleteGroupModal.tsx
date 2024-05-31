import { TrashIcon } from "@heroicons/react/16/solid";
import Modal from "../Modal";
import DeleteGroupDialog from "./DeleteGroupDialog";
import { ModalMenuProps } from "../types";
import { useDeleteTodoGroup } from "../../../hooks/todo-groups";

const DeleteGroupModal = ({ todoGroupId }: ModalMenuProps) => {
  const { trigger } = useDeleteTodoGroup(todoGroupId);

  const handleDeleteTodoGroup = () => {
    trigger();
  };

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
      <DeleteGroupDialog deleteAction={handleDeleteTodoGroup} />
    </Modal>
  );
};

export default DeleteGroupModal;
