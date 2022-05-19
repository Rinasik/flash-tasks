import { createDomain } from "effector";
import { userService } from "../userService.models";

const uploadAvatarServiceDomain = createDomain("uploadAvatarService");

const $modalIsOpen = uploadAvatarServiceDomain.createStore(false);

const openModal = uploadAvatarServiceDomain.createEvent();
const closeModal = uploadAvatarServiceDomain.createEvent();

const setAvatarFailed = userService.inputs.setAvatarFx.failData;
const setAvatarSuccess = userService.inputs.setAvatarFx.doneData;

export const uploadAvatarService = {
  inputs: {
    setAvatar: userService.inputs.setAvatar,
    openModal,
    closeModal,
  },
  outputs: {
    $modalIsOpen,
    setAvatarFailed,
    setAvatarSuccess,
  },
};
