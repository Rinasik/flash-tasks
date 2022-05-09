import { createDomain } from "effector";
import { SignInRequestPayload, Tokens } from "./signInService.types";

const signInServiceDomain = createDomain("signInservice");

const signIn = signInServiceDomain.createEvent<SignInRequestPayload>();
const signInFx = signInServiceDomain.createEffect<SignInRequestPayload, Tokens>();

const signInSuccess = signInFx.doneData;
const signInFailed = signInFx.failData;

const $loading = signInFx.pending;

export const signInService = {
  inputs: {
    signIn,
    signInFx,
  },
  outputs: {
    signInFailed,
    signInSuccess,
    $loading,
  },
};
