import { api } from "../../api/axios";
import { Desk, IReplaceTask } from "./deskService.types";

export const getDeskRequest = async (
  deskId: string | undefined
): Promise<Desk> => (await api.get(`/desks/${deskId}`)).data;

export const replaceTaskRequest= async (data: IReplaceTask): Promise<void> =>
await api.post('/tasks/replaceColumn', data) 