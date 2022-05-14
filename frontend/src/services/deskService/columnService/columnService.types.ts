import { ColumnResponseDto } from "../../../api/types";
import { Task } from "../taskService/taskService.types";

export interface Column extends ColumnResponseDto {}

export interface ColumnProps {
  color?: string;
  name?: string;
  tasks?: Task[]
}

export interface ColumnContainerProps {
  column: Column;
}

