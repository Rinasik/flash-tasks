import { api } from "../../api/axios";
import { Desks } from "./dashboardService.types";

export const getDesksRequest = async (): Promise<Desks> => 
  (await api.get("/desks")).data

