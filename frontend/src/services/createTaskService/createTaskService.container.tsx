import { useEvent, useStore } from "effector-react";
import { useNetworkErrors } from "../../hooks/useNetworkErrors";
import { CreateTaskModal } from "./components/CreateTaskModal";
import { createTaskService } from "./createTaskService.models";

export const CreateTaskContainer = () => {
  const show = useStore(createTaskService.outputs.$modalIsOpen);
  const handleClosingModal = useEvent(createTaskService.inputs.closeModal);
  const createDeskFailed = createTaskService.outputs.createTaskFailed;

  useNetworkErrors(createDeskFailed);

  return (
    <CreateTaskModal
      show={show}
      handleClosingModal={handleClosingModal}
    ></CreateTaskModal>
  );
};
