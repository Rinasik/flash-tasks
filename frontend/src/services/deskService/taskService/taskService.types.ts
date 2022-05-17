import { ElementRef } from "react";
import { ConnectDragPreview, ConnectDragSource } from "react-dnd";
import { CreateTaskDto, TaskTinyResponseDto } from "../../../api/types";

export interface TaskProps {
  dragRef?: ConnectDragSource;
  title?: string;
  isDragging: boolean;
}

export interface TaskContainerProps {
  task?: ITask;
  parentColumnId: string;
}

export interface ITask extends TaskTinyResponseDto {}

export interface CreateTaskData extends CreateTaskDto {}
