import { forward } from "effector";
import { taskService } from "./taskService.models";

forward({
  from: taskService.inputs.createTask,
  to: taskService.inputs.createTaskFx,
});
