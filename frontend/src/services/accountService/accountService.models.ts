import { createDomain } from "effector";
import { setAvatarRequest } from "./accountService.api";
import { IAvatarRequest } from "./accountService.types";

const accountServiceDomain = createDomain("accountService");

const setAvatar = accountServiceDomain.createEvent<IAvatarRequest | undefined>();
const setAvatarFx = accountServiceDomain.createEffect<IAvatarRequest, void>(
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
    $loading,
  },
};
