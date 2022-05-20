import { createDomain } from "effector";
import { TaskForm } from "../../createTaskService/createTaskFormService/components/CreateTaskForm/CreateTaskForm.types";
import { deskService } from "../deskService.models";
import { createTaskRequest } from "./taskService.api";
import { CreateTaskData } from "./taskService.types";

const taskServiceDomain = createDomain("taskService");

const createTask = taskServiceDomain.createEvent<TaskForm>();
const createTaskFx = taskServiceDomain.createEffect<CreateTaskData, void>(
  createTaskRequest
);


export const taskService = {
  inputs: {
    GetDesk: deskService.inputs.GetDesk,
    reloadDesk: deskService.inputs.getDesk,
    createTask,
    createTaskFx,

  },

};
