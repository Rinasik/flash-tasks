import { createDomain } from "effector";
import { setAvatarRequest } from "./accountService.api";

const accountServiceDomain = createDomain("accountService");

const setAvatar = accountServiceDomain.createEvent<string | undefined>();
const setAvatarFx = accountServiceDomain.createEffect<string, void>(
  setAvatarRequest
);

const setAvatarFailed = setAvatarFx.failData;
const setAvatarSuccess = setAvatarFx.doneData;
const $loading = setAvatarFx.pending;

export const accountService = {
  inputs: {
    setAvatar,
    setAvatarFx,
  },
  outputs: {
    setAvatarFailed,
    setAvatarSuccess,
    $loading
  },
};
