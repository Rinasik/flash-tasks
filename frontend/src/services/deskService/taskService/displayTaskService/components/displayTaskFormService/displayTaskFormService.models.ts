import { displayTaskService } from "../../displayTaskService.models";

export const displayTaskFormService = {
    inputs: {
        patchTask: displayTaskService.inputs.patchTask,
        deleteTask: displayTaskService.inputs.deleteTask
    },
    outputs: {
        $currentTask: displayTaskService.outputs.$currentTask,
        $loading: displayTaskService.outputs.$loading
    }
}