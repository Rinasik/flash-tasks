import { createDomain } from "effector";
import { createGate } from "effector-react";
import { PatchUserDto, UserResponseDto } from "../../api/types";
import { getMe, setAvatarRequest } from "./userService.api";
import { IAvatarRequest, ISetAvatar, User } from "./userService.types";

const userServiceDomain = createDomain("userService");

const GetUserGate = createGate();

const getUserFx = userServiceDomain.createEffect<void, UserResponseDto>(getMe);

const $me = userServiceDomain.createStore<User>({
  id: "",
  name: "",
  email: "",
  avatar: "",
});

const setAvatar = userServiceDomain.createEvent<IAvatarRequest>();
const setAvatarFx = userServiceDomain.createEffect<ISetAvatar, PatchUserDto>(
  setAvatarRequest
);


export const userService = {
  inputs: {
    GetUserGate,
    getUserFx,
    setAvatar,
    setAvatarFx,
  },
  outputs: {
    $me,
  },
};
