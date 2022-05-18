import { FC } from "react";
import { UploadAvatarProps } from "../../uploadAvatarService.types";

export const UploadAvatar: FC<UploadAvatarProps> = ({ handleChange }) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    console.log(reader.result);
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={(e) => handleChange(e)} />
      <img src="http://localhost:9000/api/files/image/698f1ee8b71010bdbbdffcaf6a4ebb3b91.jpg" />
    </>
  );
};
