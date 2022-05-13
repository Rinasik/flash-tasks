import { createDomain } from "effector";
import { createGate } from "effector-react";
import { getDeskRequest } from "./deskService.api";
import { Desk, GetDeskProps } from "./deskService.types";

const deskServiceDomain = createDomain("deskService");

const $desk = deskServiceDomain.createStore<Desk | null>(null);

const getDeskFx = deskServiceDomain.createEffect<string, Desk>(
  getDeskRequest
);

const $loading = getDeskFx.pending;

const GetDesk = createGate<GetDeskProps>();

export const deskService = {
  inputs: {
    GetDesk,
    getDeskFx,
  },
  outputs: {
    $desk,
    $loading
  },
};
