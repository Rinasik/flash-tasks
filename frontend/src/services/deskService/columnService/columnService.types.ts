import { ConnectDropTarget } from "react-dnd";
import { ColumnResponseDto } from "../../../api/types";

export interface Column extends ColumnResponseDto {}

export interface ColumnProps {
  column: Column;
  dropRef?: ConnectDropTarget;
  isOver: boolean;
}

export interface ColumnContainerProps {
  column: Column;
}
