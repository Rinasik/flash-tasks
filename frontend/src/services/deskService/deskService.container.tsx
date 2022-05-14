import { useEvent, useStore } from "effector-react";
import { useParams } from "react-router-dom";
import { DeskPage } from "./components/DeskPage";
import { deskService } from "./deskService.models";
import { createTaskService } from "./taskService/createTaskService";

export const DeskContainer = () => {
  const desk = useStore(deskService.outputs.$desk);
  const loading = useStore(deskService.outputs.$loading);
  const handleOpeningModal = useEvent(createTaskService.inputs.openModal);


  const { GetDesk } = deskService.inputs;

  const { id } = useParams();
  return (
    <>
      <GetDesk deskId={id} />
      <DeskPage
        desk={desk}
        loading={loading}
        handleOpeningModal={handleOpeningModal}
      />
    </>
  );
};
