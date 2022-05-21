import { useEvent, useStore } from "effector-react";
import { FileX } from "react-bootstrap-icons";
import { Loader } from "../../../../../../shared/components/Loader";
import { DisplayTaskForm } from "./components/DisplayTaskForm";
import { displayTaskFormService } from "./displayTaskFormService.models";

export const DisplayTaskFormContainer = () => {
  const loading = useStore(displayTaskFormService.outputs.$loading);
  const currentTask = useStore(displayTaskFormService.outputs.$currentTask);
  const handleSubmit = useEvent(displayTaskFormService.inputs.patchTask);

  if (!loading)
    return <DisplayTaskForm task={currentTask} handleSubmit={handleSubmit}/>;
  else
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </div>
    );
};
