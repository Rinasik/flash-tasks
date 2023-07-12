import { useEvent } from "effector-react";
import { FC } from "react";
import { useDrag } from "react-dnd";
import { Task } from "./components/Task";
import { displayTaskService } from "./displayTaskService";
import { TaskContainerProps } from "./taskService.types";
import "./taskService.relations";

export const TaskContainer: FC<TaskContainerProps> = ({
  task,
  parentColumnId,
}) => {
  const handleOpeningModal = useEvent(displayTaskService.inputs.openModal);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { taskId: task?._id, fromId: parentColumnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Task
      task={task}
      dragRef={drag}
      isDragging={isDragging}
      handleOpeningModal={handleOpeningModal}
    />
  );
};
