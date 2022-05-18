import { api } from "../../api/axios";
import { IAvatarRequest } from "./accountService.types";

export const setAvatarRequest = async (data: IAvatarRequest): Promise<void> =>
  await api.post("/files/image", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
