import { forward, sample } from "effector";
import { createTaskService } from "./createTaskService.models";

createTaskService.outputs.$modalIsOpen
  .on(createTaskService.inputs.openModal, () => true)
  .reset(createTaskService.inputs.closeModal);

forward({
  from: createTaskService.outputs.createTaskSuccess,
  to: createTaskService.inputs.closeModal,
});


