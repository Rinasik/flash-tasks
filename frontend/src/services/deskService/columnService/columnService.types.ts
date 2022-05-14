import { ColumnResponseDto } from "../../../api/types";
import { ITask } from "../taskService/taskService.types";

export interface Column extends ColumnResponseDto {}

export interface ColumnProps {
  color?: string;
  name?: string;
  tasks?: ITask[]
}

export interface ColumnContainerProps {
  column: Column;
}

