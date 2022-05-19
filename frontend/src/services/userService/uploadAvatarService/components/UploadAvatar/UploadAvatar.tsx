import { FC } from "react";
import { UploadAvatarProps } from "../../uploadAvatarService.types";

export const UploadAvatar: FC<UploadAvatarProps> = ({ handleChange }) => {
  return (
    <>
      <input type="file" accept="image/*" onChange={(e) => handleChange(e)} />
    </>
  );
};
