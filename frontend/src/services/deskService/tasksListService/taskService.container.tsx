import { FC } from "react";
import { Task } from "./components/Task";
import { TaskContainerProps } from "./taskService.types";

export const TaskContainer: FC<TaskContainerProps> = ({ task }) => {
  return <Task title={task?.title} />;
};
