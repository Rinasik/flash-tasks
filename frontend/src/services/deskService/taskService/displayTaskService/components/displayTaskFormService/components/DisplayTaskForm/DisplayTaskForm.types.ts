import { PatchTaskDto } from "../../../../../../../../api/types";
import { ITask } from "../../../../../taskService.types";

export interface DisplayTaskFormProps {
  task: ITask;
  handleSubmit: (payload: IPatchTask) => void;
}

export interface IPatchTask extends PatchTaskDto {}

export interface IPatchTaskPayload {
  data: IPatchTask;
  id: string;
}
