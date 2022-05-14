import { deskService } from "../../../deskService.models";

const $columnsList = deskService.outputs.$desk.map((desk) =>
  desk?.columns.map((column) => ({
    id: column._id,
    name: column.name,
    color: column.color,
  }))
);


export const createTaskFormService = {
  outputs: {
    $columnsList,
  },
};
