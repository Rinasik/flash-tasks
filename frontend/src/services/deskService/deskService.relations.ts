import { forward, sample } from "effector";
import { TaskTinyResponseDto } from "../../api/types";
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
});

sample({
  clock: deskService.inputs.GetDesk.open.map(({ deskId }) => deskId),
  filter: Boolean,
  target: deskService.inputs.getDeskFx,
});

forward({
  from: deskService.inputs.moveTask,
  to: deskService.inputs.moveTaskFx
})

deskService.outputs.$desk.on(
  deskService.inputs.moveTask,
  (desk, { fromId, toId, taskId }) => {
    const task = desk.columns
      .reduce(
        (tasks, column) => [...tasks, ...column.tasks],
        [] as TaskTinyResponseDto[]
      )
      .find((task) => task._id === taskId);

    if (!task) return desk;
    return {
      ...desk,
      columns: desk.columns.map((column) => {
        if (column._id === fromId) {
          column.tasks = column.tasks.filter((task) => task._id !== taskId);
        }

        if (column._id === toId) {
          column.tasks = [...column.tasks, task];
        }

        return column;
      }),
    };
  }
);
