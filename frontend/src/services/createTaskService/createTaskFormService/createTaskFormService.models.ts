import { deskService } from "../../deskService";
import { taskService } from "../../deskService/taskService/taskService.models";

const $columnsList = deskService.outputs.$desk.map((desk) =>
  desk?.columns.map((column) => ({
    id: column._id,
    name: column.name,
    color: column.color,
  }))
);

export const createTaskFormService = {
  inputs: {
    createTask: taskService.inputs.createTask,
  },
  outputs: {
    $columnsList,
  },
};
