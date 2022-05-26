import { api } from "../../../../api/axios";
import { ITask, ITinyTask } from "../taskService.types";
import { IPatchTaskPayload } from "./components/displayTaskFormService/components/DisplayTaskForm/DisplayTaskForm.types";

export const getTaskDataRequest = async (taskId: string): Promise<ITask> =>
  (await api.get(`/tasks/${taskId}`)).data;

export const patchTaskRequest = async ({
  data,
  id,
}: IPatchTaskPayload): Promise<ITinyTask> =>
  (await api.patch(`/tasks/${id}`, data)).data;

export const deleteTaskRequest = async (id: string): Promise<string> =>
  (await api.delete(`tasks/${id}`)).data._id;
