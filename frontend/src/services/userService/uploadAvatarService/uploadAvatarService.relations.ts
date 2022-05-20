import { forward } from "effector";
import { uploadAvatarService } from "./uploadAvatarService.models";

uploadAvatarService.outputs.$modalIsOpen
  .on(uploadAvatarService.inputs.openModal, () => true)
  .reset(uploadAvatarService.inputs.closeModal);

forward({
  from: uploadAvatarService.outputs.setAvatarSuccess,
  to: uploadAvatarService.inputs.closeModal,
});
