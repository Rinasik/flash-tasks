import { api } from "../../../api/axios";
import { CreateTaskData, ITinyTask } from "./taskService.types";

export const createTaskRequest = async (
  taskData: CreateTaskData
): Promise<ITinyTask> => (await api.post("/tasks", taskData)).data;
