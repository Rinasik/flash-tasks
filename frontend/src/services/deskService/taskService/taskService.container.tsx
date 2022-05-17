import { FC } from "react";
import { useDrag } from "react-dnd";
import { Task } from "./components/Task";
import { TaskContainerProps } from "./taskService.types";

export const TaskContainer: FC<TaskContainerProps> = ({ task, parentColumnId }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { taskId: task?._id, fromId: parentColumnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Task
      title={task?.title}
      dragRef={drag}
      isDragging={isDragging}
    />
  );
};
