import { forward } from "effector";
import { displayTaskService } from "./displayTaskService.models";

displayTaskService.outputs.$modalIsOpen
  .on(displayTaskService.inputs.openModal, () => true)
  .reset(displayTaskService.inputs.closeModal);

forward({
  from: displayTaskService.inputs.openModal,
  to: displayTaskService.inputs.getTaskDataFx,
});
