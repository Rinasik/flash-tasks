import { uploadAvatarService } from "./uploadAvatarService.models";

uploadAvatarService.outputs.$modalIsOpen
  .on(uploadAvatarService.inputs.openModal, () => true)
  .reset(uploadAvatarService.inputs.closeModal);
