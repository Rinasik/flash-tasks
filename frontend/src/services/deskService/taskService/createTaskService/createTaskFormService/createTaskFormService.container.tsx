import { useEvent, useStore } from "effector-react";
import { createTaskService } from "../createTaskService.models"
import { CreateTaskForm } from "./components/CreateTaskForm"

export const CreateTaskFormContainer = () => {
    const handleSubmit = useEvent(createTaskService.inputs.createTask);
    const loading = useStore(createTaskService.outputs.$loading)


    return <CreateTaskForm handleSubmit={handleSubmit} loading={loading}/>
}