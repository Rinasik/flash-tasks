import { ForwardedRef } from "react";
import { CreateTaskDto, TaskTinyResponseDto } from "../../../api/types";

export interface TaskProps {
  title?: string;
  ref?: ForwardedRef<HTMLDivElement>

}

export interface TaskContainerProps {
  task?: ITask;

}

export interface ITask extends TaskTinyResponseDto {}

export interface CreateTaskData extends CreateTaskDto {}
