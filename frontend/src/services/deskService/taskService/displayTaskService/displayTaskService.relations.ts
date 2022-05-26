import { forward, sample } from "effector";
import { displayTaskService } from "./displayTaskService.models";

displayTaskService.outputs.$currentTask.on(
  displayTaskService.inputs.getTaskDataFx.doneData,
  (_, task) => task
);

displayTaskService.outputs.$modalIsOpen
  .on(displayTaskService.inputs.openModal, () => true)
  .reset(displayTaskService.inputs.closeModal);

forward({
  from: displayTaskService.inputs.openModal,
  to: displayTaskService.inputs.getTaskDataFx,
});

forward({
  from: [
    displayTaskService.inputs.deleteTaskFx.done,
    displayTaskService.inputs.patchTaskFx.done,
  ],
  to: displayTaskService.inputs.closeModal,
});

sample({
  clock: displayTaskService.inputs.deleteTask,
  filter: Boolean,
  target: displayTaskService.inputs.deleteTaskFx,
});

sample({
  source: displayTaskService.outputs.$currentTask,
  clock: displayTaskService.inputs.patchTask,
  filter: Boolean,
  fn: (sourceData, clockData) => ({
    id: sourceData._id,
    data: clockData,
  }),
  target: displayTaskService.inputs.patchTaskFx,
});
