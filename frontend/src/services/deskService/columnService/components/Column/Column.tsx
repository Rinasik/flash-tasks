import { FC } from "react";
import { TaskContainer } from "../../../taskService/taskService.container";
import { ColumnProps } from "../../columnService.types";
import { NameWrapper, TasksWrapper, Wrap } from "./Column.styled";

export const Column: FC<ColumnProps> = ({ color, name, tasks }) => {
  return (
    <Wrap color={color}>
      <NameWrapper>{name}</NameWrapper>
      <TasksWrapper>
        {tasks?.map((task) => (
          <TaskContainer task={task} key={task._id} />
        ))}

        <TaskContainer />
      </TasksWrapper>
    </Wrap>
  );
};
