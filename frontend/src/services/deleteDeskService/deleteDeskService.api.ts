import { api } from "../../api/axios";

export const deleteDeskRequest = async (deskId: string) : Promise<void> => 
    await api.delete(`http://localhost:9000/api/desks/${deskId}`)
