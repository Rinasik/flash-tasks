import { api } from "../../../api/axios";
import { CreateTaskData } from "./taskService.types";

export const createTaskRequest = async (
  taskData: CreateTaskData
): Promise<void> => await api.post("/tasks", taskData);

