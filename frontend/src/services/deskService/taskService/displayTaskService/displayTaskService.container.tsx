import { useEvent, useStore } from "effector-react";
import { DisplayTaskModal } from "./components/DisplayTaskModal";
import { displayTaskService } from "./displayTaskService.models";
import "./displayTaskService.relations";


export const DisplayTaskContainer = () => {
  const modalIsOpen = useStore(displayTaskService.outputs.$modalIsOpen);
  const handleClosing = useEvent(displayTaskService.inputs.closeModal);

  return (
    <DisplayTaskModal
      show={modalIsOpen}
      handleClosingModal={handleClosing}
    ></DisplayTaskModal>
  );
};
