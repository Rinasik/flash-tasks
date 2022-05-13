import { api } from "../../api/axios";
import { UserResponseDto } from "../../api/types";

export const getMe = async (): Promise<UserResponseDto> => {
  return (await api.get("/users/me")).data;
}