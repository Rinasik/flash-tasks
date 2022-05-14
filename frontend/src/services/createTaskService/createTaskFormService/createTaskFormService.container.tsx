import { useEvent, useStore } from "effector-react";
import { createTaskService } from "../createTaskService.models";
import { CreateTaskForm } from "./components/CreateTaskForm";
import { createTaskFormService } from "./createTaskFormService.models";

export const CreateTaskFormContainer = () => {
  const handleSubmit = useEvent(createTaskService.inputs.createTask);
  const loading = useStore(createTaskService.outputs.$loading);
  const columnsList = useStore(createTaskFormService.outputs.$columnsList);

  return (
    <CreateTaskForm
      handleSubmit={handleSubmit}
      loading={loading}
      columnsList={columnsList}
    />
  );
};
