import { createDomain } from "effector";
import { taskService } from "../deskService/taskService";

const createDeskServiceDomain = createDomain("createTaskFormService");

const $modalIsOpen = createDeskServiceDomain.createStore(false);

const openModal = createDeskServiceDomain.createEvent();
const closeModal = createDeskServiceDomain.createEvent();

const createTaskSuccess = taskService.inputs.createTaskFx.doneData;
const createTaskFailed = taskService.inputs.createTaskFx.failData;

const $loading = taskService.inputs.createTaskFx.pending;

export const createTaskService = {
  inputs: {
    createTask: taskService.inputs.createTask,
    openModal,
    closeModal,
  },
  outputs: {
    $modalIsOpen,
    $loading,
    createTaskSuccess,
    createTaskFailed,
  },
};
