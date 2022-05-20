import { api } from "../../../../api/axios";


export const getTaskDataRequest = async (taskid: string):Promise<void> => await api.get('/')