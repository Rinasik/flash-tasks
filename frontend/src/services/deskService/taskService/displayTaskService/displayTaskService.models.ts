import { createDomain } from "effector";
import { StringMappingType } from "typescript";
import { getTaskDataRequest } from "./displayTaskService.api";

const displayTaskServiceDomain = createDomain("displayTaskService");

const $modalIsOpen = displayTaskServiceDomain.createStore(false);

const openModal = displayTaskServiceDomain.createEvent<string>();
const closeModal = displayTaskServiceDomain.createEvent();

const getTaskDataFx =
  displayTaskServiceDomain.createEffect<string, void>(getTaskDataRequest);

export const displayTaskService = {
  inputs: {
    openModal,
    closeModal,
    getTaskDataFx,
  },
  outputs: {
    $modalIsOpen,
  },
};
