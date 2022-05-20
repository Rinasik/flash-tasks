import { FC } from "react";
import { TaskProps } from "../../taskService.types";
import { TaskWrapper } from "./Task.styled";

export const Task: FC<TaskProps> = ({
  title,
  dragRef,
  isDragging,
  
}) => {
  return (
    <>
    
      <TaskWrapper ref={dragRef} isDragging={isDragging} >
        {title}
      </TaskWrapper>
    </>
  );
};
