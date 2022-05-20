import { FC } from "react";
import { Modal } from "../../../../../shared/components/Modal";
import { UploadAvatarInput } from "../UploadAvatarInput/UploadAvatarInput";
import { UploadAvatarModalProps } from "./UploadAvatarModal.types";

export const UploadAvatarModal: FC<UploadAvatarModalProps> = ({
  show,
  handleClosingModal,
  handleChange
}) => {
  return (
    <Modal show={show} title={"Upload avatar"} onHide={handleClosingModal}>
      <UploadAvatarInput handleChange={handleChange} />
    </Modal>
  );
};
