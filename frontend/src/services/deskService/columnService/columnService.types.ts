import { ColumnResponseDto, TaskTinyResponseDto } from "../../../api/types";

export interface Column extends ColumnResponseDto {}

export interface ColumnProps {
  color?: string;
  name?: string;
  tasks?: TaskTinyResponseDto[]
}

export interface ColumnContainerProps {
  column: Column;
}

export interface Task extends TaskTinyResponseDto {}
