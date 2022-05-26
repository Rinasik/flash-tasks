import { forward, sample } from "effector";
import { TaskTinyResponseDto } from "../../api/types";
import { deskService } from "./deskService.models";
import { taskService } from "./taskService";

deskService.outputs.$desk
  .on(deskService.inputs.getDeskFx.doneData, (_, desk) => desk)
  .on(taskService.inputs.createTaskFx.doneData, (desk, task) => ({
    ...desk,
    columns: desk.columns.map((column) => {
      if (column._id === task.column)
        column.tasks = [...column.tasks, { ...task, preview: "" }];
      return column;
    }),
  }));

sample({
  clock: deskService.inputs.GetDesk.open.map(({ deskId }) => deskId),
  filter: Boolean,
  target: deskService.inputs.getDeskFx,
});

forward({
  from: deskService.inputs.moveTask,
  to: deskService.inputs.moveTaskFx,
});

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

deskService.outputs.$desk.on(
  deskService.inputs.deleteTaskFx.doneData,
  (desk, taskId) => {
    return {
      ...desk,
      columns: desk.columns.map((column) => {
        column.tasks = column.tasks.filter((task) => task._id !== taskId);
        return column;
      }),
    };
  }
);

deskService.outputs.$desk.on(
  deskService.inputs.patchTaskFx.doneData,
  (desk, task) => ({
    ...desk,
    columns: desk.columns.map((column) => {
      if (column._id === task.column)
        column.tasks = column.tasks.map((currTask) => {
          if (currTask._id === task._id) return task;
          return currTask;
        });

      return column;
    }),
  })
);
