import { FC } from "react";
import { UploadAvatarProps } from "../../uploadAvatarService.types";
import { Wrapper } from "./UploadAvatarInput.styled";
import { Upload } from "react-bootstrap-icons";

export const UploadAvatarInput: FC<UploadAvatarProps> = ({ handleChange }) => {
  return (
    <>
      <input
        id="avatarInput"
        type="file"
        accept="image/*"
        onChange={(event) =>
          event.target.files && handleChange && handleChange(event.target.files)
        }
        style={{ display: "none" }}
      />
      <label htmlFor="avatarInput" style={{ margin: 0, width: "100%" }}>
        <Wrapper
          onDrop={(event) => {
            event.preventDefault();
            event.stopPropagation();
            handleChange && handleChange(event.dataTransfer.files);
          }}
          onDragOver={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
        >
          <Upload size={"22px"} />
          Drop your file here or click to choose
        </Wrapper>
      </label>
    </>
  );
};
