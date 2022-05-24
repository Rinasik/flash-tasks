import { createDomain } from "effector";
import { createGate } from "effector-react";
import { getDeskRequest, replaceTaskRequest } from "./deskService.api";
import { Desk, GetDeskProps, IReplaceTask } from "./deskService.types";
import { displayTaskService } from "./taskService/displayTaskService";

const deskServiceDomain = createDomain("deskService");

const $desk = deskServiceDomain.createStore<Desk>({
  _id: "",
  name: "",
  columns: [],
});

const getDesk = deskServiceDomain.createEvent();
const getDeskFx = deskServiceDomain.createEffect<string, Desk>(getDeskRequest);

const $loading = getDeskFx.pending;

const moveTask = deskServiceDomain.createEvent<IReplaceTask>();
const moveTaskFx = deskServiceDomain.createEffect<IReplaceTask, void>(
  replaceTaskRequest
);

const GetDesk = createGate<GetDeskProps>();

export const deskService = {
  inputs: {
    GetDesk,
    getDesk,
    getDeskFx,
    moveTask,
    moveTaskFx,
    deleteTaskFx: displayTaskService.inputs.deleteTaskFx,
  },
  outputs: {
    $desk,
    $loading,
  },
};
