import { api } from "../../api/axios";
import { Desk } from "./deskService.types";

export const getDeskRequest = async (
  deskId: string | undefined
): Promise<Desk> => (await api.get(`/desks/${deskId}`)).data;
