import { UserResponseDto } from "../../api/types";

export interface User extends UserResponseDto {}

export interface AvatarPayload {
  image: File;
  type: string;
}

export interface AccountPageProps {
  userData: User | null;
  handleOpeningModal?: () => void;
}

export interface SetAvatarPayload {
  data: AvatarPayload;
  user: User | null;
}
