import {  sample } from "effector";
import { deskService } from "./deskService.models";

deskService.outputs.$desk.on(
  deskService.inputs.getDeskFx.doneData,
  (_, desk) => desk
);

sample({
  source: deskService.inputs.GetDesk.state.map(({ deskId }) => deskId),
  clock: deskService.inputs.getDesk,
  filter: Boolean,
  target: deskService.inputs.getDeskFx,
})

sample({
  clock: deskService.inputs.GetDesk.open.map(({ deskId }) => deskId),
  filter: Boolean,
  target: deskService.inputs.getDeskFx,
});
