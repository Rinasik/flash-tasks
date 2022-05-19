import { forward, sample } from "effector";
import { userService } from "./userService.models";

userService.outputs.$me.on(
  userService.inputs.getUserFx.doneData,
  (_, me) => me
).on(userService.inputs.setAvatarFx.doneData, (user, patchedUser) => ({...user, avatar: patchedUser.avatar}));


forward({
  from: userService.inputs.GetUserGate.open,
  to: userService.inputs.getUserFx,
});

sample({
  source: userService.outputs.$me,
  clock: userService.inputs.setAvatar,
  fn: (sourceData, clockData) => ({data: clockData, user: sourceData}),
  target: userService.inputs.setAvatarFx
})

