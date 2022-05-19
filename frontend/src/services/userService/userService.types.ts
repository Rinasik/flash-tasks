import { UserResponseDto } from "../../api/types";

export interface User extends UserResponseDto {}

export interface IAvatarRequest {
  image: File;
  type: string;
}

export interface AccountPageProps {
  userData: User | null;
}

export interface ISetAvatar {
  data: IAvatarRequest;
  user: User | null;
}
