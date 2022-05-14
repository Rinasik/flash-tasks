import { FC } from "react";
import { Modal } from "../../../../shared/components/Modal";
import { CreateTaskFormContainer } from "../../createTaskFormService/createTaskFormService.container";
import { CreateTaskModalProps } from "./CreateTaskModal.types";

export const CreateTaskModal: FC<CreateTaskModalProps> = ({
  show,
  handleClosingModal,
}) => {
  return (
    <Modal show={show} title={"Create new task"} onHide={handleClosingModal}>
      <CreateTaskFormContainer />
    </Modal>
  );
};
