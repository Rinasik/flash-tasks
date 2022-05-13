import { api } from "../../api/axios";
import { SignUpRequestPayload } from "./signUpService.types";

export const createUser = async (requstData: SignUpRequestPayload): Promise<void> =>
  await api.post("/users", requstData);
