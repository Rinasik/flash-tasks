import { ChangeEvent } from "react";

export interface UploadAvatarProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
