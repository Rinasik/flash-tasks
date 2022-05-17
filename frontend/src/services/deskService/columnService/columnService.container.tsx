import Item from "antd/lib/list/Item";
import { useEvent } from "effector-react";
import { FC, useEffect } from "react";
import { ConnectDropTarget, useDrop } from "react-dnd";
import { deskService } from "../deskService.models";
import { ColumnContainerProps } from "./columnService.types";
import { Column } from "./components/Column";

export const ColumnContainer: FC<ColumnContainerProps> = ({ column }) => {
  const moveTask = useEvent(deskService.inputs.moveTask);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: { taskId: string; fromId: string }) =>
      moveTask({
        taskId: item.taskId,
        fromId: item.fromId,
        toId: column._id,
      }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return <Column dropRef={drop} isOver={isOver} column={column} />;
};
