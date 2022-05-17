import { FC } from "react";
import { TaskContainer } from "../../../taskService/taskService.container";
import { ColumnProps } from "../../columnService.types";
import { DropableTask, NameWrapper, TasksWrapper, Wrap } from "./Column.styled";


export const Column: FC<ColumnProps> = ({ isOver, dropRef, column}) => {
  return (
      <Wrap color={column.color} ref={dropRef}>
        <NameWrapper>{column.name}</NameWrapper>
        <TasksWrapper>
          {column.tasks?.map((task) => (
            <TaskContainer task={task} key={task._id} parentColumnId={column._id}/>
          ))}
          {isOver && <DropableTask/> }
        </TasksWrapper>
      </Wrap>
  );
};
