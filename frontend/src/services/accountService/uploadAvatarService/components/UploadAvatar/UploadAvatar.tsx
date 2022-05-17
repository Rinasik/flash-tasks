import { Upload } from "antd";
import { FC } from "react";
import { UploadAvatarProps } from "../../uploadAvatarService.types";

export const UploadAvatar: FC<UploadAvatarProps> = () => {
  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
      >Upload new avatar</Upload>
    </>
  );
};
