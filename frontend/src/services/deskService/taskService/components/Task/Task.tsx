import { FC } from "react";
import { TaskProps } from "../../taskService.types";
import { TaskWrapper } from "./Task.styled";

export const Task: FC<TaskProps> = ({
  task,
  dragRef,
  isDragging,
  handleOpeningModal,
}) => {
  return (
    <TaskWrapper
      ref={dragRef}
      isDragging={isDragging}
      onClick={() => task && handleOpeningModal(task?._id)}
    >
      {task && task.title}
    </TaskWrapper>
  );
};
