import { CreateTaskDto, TaskTinyResponseDto } from "../../../api/types";

export interface TaskProps {
  title?: string;
}

export interface TaskContainerProps {
  task?: TaskTinyResponseDto;
}

export interface Task extends TaskTinyResponseDto {}

export interface CreateTaskData extends CreateTaskDto {}
