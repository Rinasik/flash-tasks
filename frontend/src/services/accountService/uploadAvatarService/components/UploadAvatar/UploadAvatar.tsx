import { ChangeEvent, FC, useEffect, useState } from "react";
import { api } from "../../../../../api/axios";
import { UploadAvatarProps } from "../../uploadAvatarService.types";

export const UploadAvatar: FC<UploadAvatarProps> = ({ handleUpload }) => {
  const [image, setImage] = useState<string>("");

  const onImageChange = async(event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      console.log(await api.post('/files/image', img));
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => onImageChange(e)}
      />
    </>
  );
};
