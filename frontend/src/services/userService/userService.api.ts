import {  AxiosResponse } from "axios";
import { api } from "../../api/axios";
import { PatchUserDto, UserResponseDto } from "../../api/types";
import { AvatarPayload, SetAvatarPayload } from "./userService.types";

export const getMe = async (): Promise<UserResponseDto> => {
  return (await api.get("/users/me")).data;
};

export const setAvatarRequest = async ({
  data,
  user,
}: SetAvatarPayload): Promise<PatchUserDto> => {
  const { filename } = (
    await api.post<
      AvatarPayload,
      AxiosResponse<{ filename: string; originalname: string }>
    >("/files/image", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  ).data;

  return (
    await api.patch("/users", {
      name: user?.name,
      email: user?.email,
      avatar: filename,
    })
  ).data;
};
