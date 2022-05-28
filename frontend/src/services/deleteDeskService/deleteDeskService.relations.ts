import { sample } from "effector";
import { Desk } from "../deskService/deskService.types";
import { deleteDeskService } from "./deleteDeskService.models";

sample({
  source: deleteDeskService.outputs.$desk,
  clock: deleteDeskService.inputs.deleteDesk,
  fn: (sourceData: Desk) => sourceData._id,
  filter: Boolean,
  target: deleteDeskService.inputs.deleteDeskFx,
});
