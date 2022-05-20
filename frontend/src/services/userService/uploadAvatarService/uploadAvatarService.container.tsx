import { message } from "antd";
import { useEvent, useStore } from "effector-react";
import { useEffect } from "react";
import { useNetworkErrors } from "../../../hooks/useNetworkErrors";
import { UploadAvatarModal } from "./components/UploadAvatarModal";
import { uploadAvatarService } from "./uploadAvatarService.models";

export const UploadAvatarContainer = () => {
  const show = useStore(uploadAvatarService.outputs.$modalIsOpen);
  const handleClosingModal = useEvent(uploadAvatarService.inputs.closeModal);
  const handleUpload = useEvent(uploadAvatarService.inputs.setAvatar);

  const setAvatarFailed = uploadAvatarService.outputs.setAvatarFailed;
  const setAvatarSuccess = uploadAvatarService.outputs.setAvatarSuccess;

  const onChange = (files: FileList) => {
    if (files[0]) {
      const img = files[0];
      handleUpload && handleUpload({ image: img, type: img.type });
    }
  };

  useNetworkErrors(setAvatarFailed);

  useEffect(
    () =>
      setAvatarSuccess.watch(() => {
        message.success("Avatar has been successfully changed");
      }),
    []
  );

  return (
    <UploadAvatarModal
      handleChange={onChange}
      show={show}
      handleClosingModal={handleClosingModal}
    />
  );
};
