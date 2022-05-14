import { CreateTaskData } from "../../../../taskService.types";

export interface CreateTaskFormProps {
    handleSubmit: (payload:CreateTaskData) => void;
    loading: boolean;
}