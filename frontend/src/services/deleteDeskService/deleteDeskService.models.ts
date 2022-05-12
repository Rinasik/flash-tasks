import { createDomain } from "effector";
import { deskService } from "../deskService";
import { deleteDeskRequest } from "./deleteDeskService.api";

const deleteDeskServiceDomain = createDomain("deleteDeskService");

const deleteDesk = deleteDeskServiceDomain.createEvent<void>();
const deleteDeskFx = deleteDeskServiceDomain.createEffect<string, void>(
  deleteDeskRequest
);

const deleteDeskSuccess = deleteDeskFx.doneData;
const deleteDeskFailed = deleteDeskFx.failData;

export const deleteDeskService = {
  inputs: {
    deleteDesk,
    deleteDeskFx,
  },
  outputs: {
    $desk: deskService.outputs.$desk,
    deleteDeskFailed,
    deleteDeskSuccess,
  },
};
