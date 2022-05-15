import { FC, useEffect } from "react";
import { useDrag } from "react-dnd";
import { Task } from "./components/Task";
import { TaskContainerProps } from "./taskService.types";

export const TaskContainer: FC<TaskContainerProps> = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return <Task title={task?.title}/>;
};
