import { createDomain } from "effector";
import { createGate } from "effector-react";
import { PatchUserDto, UserResponseDto } from "../../api/types";
import { getMe, setAvatarRequest } from "./userService.api";
import { AvatarPayload, SetAvatarPayload, User } from "./userService.types";

const userServiceDomain = createDomain("userService");

const GetUserGate = createGate();

const getUserFx = userServiceDomain.createEffect<void, UserResponseDto>(getMe);

const $me = userServiceDomain.createStore<User>({
  id: "",
  name: "",
  email: "",
  avatar: "",
});

const setAvatar = userServiceDomain.createEvent<AvatarPayload>();
const setAvatarFx = userServiceDomain.createEffect<SetAvatarPayload, PatchUserDto>(
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
