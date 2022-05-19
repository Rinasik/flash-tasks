import { AxiosPromise, AxiosResponse } from "axios";
import { ArrowFunction } from "typescript";
import { api } from "../../api/axios";
import { PatchUserDto, UserResponseDto } from "../../api/types";
import { IAvatarRequest, ISetAvatar, User } from "./userService.types";

export const getMe = async (): Promise<UserResponseDto> => {
  return (await api.get("/users/me")).data;
};

export const setAvatarRequest = async ({
  data,
  user,
}: ISetAvatar): Promise<PatchUserDto> => {
  const { filename } = (
    await api.post<
      IAvatarRequest,
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
