import { ConnectDragSource } from "react-dnd";
import { CreateTaskDto, TaskResponseDto, TaskTinyResponseDto } from "../../../api/types";

export interface TaskProps {
  handleOpeningModal: (taskId: string) => void;
  dragRef?: ConnectDragSource;
  task?: ITinyTask;
  isDragging: boolean;
}

export interface TaskContainerProps {
  task?: ITinyTask;
  parentColumnId: string;
}

export interface TaskDescriptionModalProps {
  show: boolean;
  taskData: string;
}

export interface ITinyTask extends TaskTinyResponseDto {}

export interface CreateTaskData extends CreateTaskDto {}

export interface ITask extends TaskResponseDto {}


