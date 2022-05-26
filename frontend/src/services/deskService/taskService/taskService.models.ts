import { createDomain } from "effector";
import { TaskForm } from "../../createTaskService/createTaskFormService/components/CreateTaskForm/CreateTaskForm.types";
import { deskService } from "../deskService.models";
import { displayTaskService } from "./displayTaskService";
import { createTaskRequest } from "./taskService.api";
import { CreateTaskData, ITinyTask } from "./taskService.types";

const taskServiceDomain = createDomain("taskService");

const createTask = taskServiceDomain.createEvent<TaskForm>();
const createTaskFx = taskServiceDomain.createEffect<CreateTaskData, ITinyTask>(
  createTaskRequest
);

export const taskService = {
  inputs: {
    GetDesk: deskService.inputs.GetDesk,
    createTask,
    createTaskFx,
  },
};
