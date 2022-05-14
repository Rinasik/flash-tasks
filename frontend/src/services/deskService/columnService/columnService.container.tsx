import { FC, useEffect } from "react";
import { ColumnContainerProps } from "./columnService.types";
import { Column } from "./components/Column";

export const ColumnContainer: FC<ColumnContainerProps> = ({ column }) => {
  return (
    <Column color={column.color} name={column.name} tasks={column.tasks} />
  );
};
