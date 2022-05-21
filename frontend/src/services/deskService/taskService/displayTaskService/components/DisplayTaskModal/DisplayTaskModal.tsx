import { FC } from "react";
import { Modal } from "../../../../../../shared/components/Modal";
import { DisplayTaskFormContainer } from "../displayTaskFormService/displayTaskFormService.container";
import { DisplayTaskModalProps } from "./DisplayTaskModal.types";

export const DisplayTaskModal: FC<DisplayTaskModalProps> = ({
  show,
  handleClosingModal,
}) => {
  return (
    <Modal show={show} onHide={handleClosingModal} title={"Edit chosen task"} minHeight='90px'>
      <DisplayTaskFormContainer />
    </Modal>
  );
};
