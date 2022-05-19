import { useEvent, useStore } from "effector-react";
import { UploadAvatarModal } from "./components/UploadAvatarModal";
import { uploadAvatarService } from "./uploadAvatarService.models";

export const UploadAvatarContainer = () => {
  const show = useStore(uploadAvatarService.outputs.$modalIsOpen);
  const handleClosingModal = useEvent(uploadAvatarService.inputs.closeModal);
  const handleUpload = useEvent(uploadAvatarService.inputs.setAvatar);

  const onChange = (files: FileList) => {
    if (files[0]) {
      const img = files[0];
      handleUpload && handleUpload({ image: img, type: img.type });
    }
  };

  return (
    <UploadAvatarModal
      handleChange={onChange}
      show={show}
      handleClosingModal={handleClosingModal}
    />
  );
};
