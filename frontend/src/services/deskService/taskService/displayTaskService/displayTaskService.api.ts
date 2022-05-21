import { api } from "../../../../api/axios";
import { ITask } from "../taskService.types";
import { IPatchTaskPayload } from "./components/displayTaskFormService/components/DisplayTaskForm/DisplayTaskForm.types";

export const getTaskDataRequest = async (taskId: string): Promise<ITask> =>
  (await api.get(`/tasks/${taskId}`)).data;

export const patchTaskRequest = async ({
  data,
  id,
}: IPatchTaskPayload): Promise<void> => await api.patch(`/tasks/${id}`, data);

export const deleteTaskRequest = async (id: string): Promise<void> =>
  await api.delete(`tasks/${id}`);
