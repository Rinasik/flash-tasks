import { createDomain } from "effector";

const displayTaskServiceDomain = createDomain("displayTaskService");

const $modalIsOpen = displayTaskServiceDomain.createStore(false);

const openModal = displayTaskServiceDomain.createEvent();
const closeModal = displayTaskServiceDomain.createEvent();

export const displayTaskService = {
  inputs: {
    openModal,
    closeModal,
  },
  outputs: {
    $modalIsOpen,
  },
};
