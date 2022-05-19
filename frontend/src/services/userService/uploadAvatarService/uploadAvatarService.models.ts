import { createDomain } from "effector";
import { userService } from "../userService.models";

const uploadAvatarServiceDomain = createDomain("uploadAvatarService");

const $modalIsOpen = uploadAvatarServiceDomain.createStore(false);

const openModal = uploadAvatarServiceDomain.createEvent();
const closeModal = uploadAvatarServiceDomain.createEvent();

export const uploadAvatarService = {
  inputs: {
    setAvatar: userService.inputs.setAvatar,
    openModal,
    closeModal
  },
  outputs:{
    $modalIsOpen
  }
};
