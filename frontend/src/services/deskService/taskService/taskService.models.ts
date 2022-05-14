import { createDomain } from "effector";
import { createTaskRequest } from "./taskService.api";
import { CreateTaskData } from "./taskService.types";

const taskServiceDomain = createDomain("taskService");

const createTask = taskServiceDomain.createEvent<CreateTaskData>();
const createTaskFx = taskServiceDomain.createEffect<CreateTaskData, void>(
  createTaskRequest
);

export const taskService = {
  inputs: {
    createTask,
    createTaskFx,
  },
};
