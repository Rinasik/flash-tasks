import { useEvent } from "effector-react";
import { ChangeEvent } from "react";
import { UploadAvatar } from "./components/UploadAvatar";
import { uploadAvatarService } from "./uploadAvatarService.models";

export const UploadAvatarContainer = () => {
  const handleUpload = useEvent(uploadAvatarService.inputs.setAvatar);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      handleUpload && handleUpload({ image: img, type: img.type });
    }
  };

  return <UploadAvatar handleChange={onChange} />;
};
