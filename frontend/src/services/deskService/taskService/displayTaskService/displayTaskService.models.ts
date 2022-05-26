import { createDomain } from "effector";
import { ITask, ITinyTask } from "../taskService.types";
import {
  IPatchTask,
  IPatchTaskPayload,
} from "./components/displayTaskFormService/components/DisplayTaskForm/DisplayTaskForm.types";
import {
  deleteTaskRequest,
  getTaskDataRequest,
  patchTaskRequest,
} from "./displayTaskService.api";

const displayTaskServiceDomain = createDomain("displayTaskService");

const $modalIsOpen = displayTaskServiceDomain.createStore(false);

const openModal = displayTaskServiceDomain.createEvent<string>();
const closeModal = displayTaskServiceDomain.createEvent();

const getTaskDataFx = displayTaskServiceDomain.createEffect<string, ITask>(
  getTaskDataRequest
);
const $loading = getTaskDataFx.pending;

const $currentTask = displayTaskServiceDomain.createStore<ITask>({} as ITask);

const patchTask = displayTaskServiceDomain.createEvent<IPatchTask>();
const patchTaskFx = displayTaskServiceDomain.createEffect<
  IPatchTaskPayload,
  ITinyTask
>(patchTaskRequest);

const deleteTask = displayTaskServiceDomain.createEvent<string>();
const deleteTaskFx = displayTaskServiceDomain.createEffect<string, string>(
  deleteTaskRequest
);

export const displayTaskService = {
  inputs: {
    openModal,
    closeModal,
    getTaskDataFx,
    patchTask,
    patchTaskFx,
    deleteTask,
    deleteTaskFx,
  },
  outputs: {
    $modalIsOpen,
    $currentTask,
    $loading,
  },
};
