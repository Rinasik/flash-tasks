import { FC } from "react";
import { TaskProps } from "../../taskService.types";
import { TaskWrapper } from "./Task.styled";

export const Task: FC<TaskProps> = ({ title }) => {
  return <TaskWrapper draggable>{title}</TaskWrapper>;
};
