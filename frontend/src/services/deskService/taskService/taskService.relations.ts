import { forward, sample } from "effector";
import { TaskForm } from "../../createTaskService/createTaskFormService/components/CreateTaskForm/CreateTaskForm.types";
import { GetDeskProps } from "../deskService.types";
import { taskService } from "./taskService.models";

sample({
  source: taskService.inputs.GetDesk.state,
  clock: taskService.inputs.createTask,
  fn: (sourceData: GetDeskProps, clockData :TaskForm) => ({...clockData, ...sourceData}),
  target: taskService.inputs.createTaskFx,
});

forward({
  from: taskService.inputs.createTaskFx.doneData,
  to: taskService.inputs.reloadDesk
})
