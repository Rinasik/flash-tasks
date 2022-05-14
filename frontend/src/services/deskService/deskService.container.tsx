import { useEvent, useStore } from "effector-react";
import { useParams } from "react-router-dom";
import { createTaskService } from "../createTaskService";
import { DeskPage } from "./components/DeskPage";
import { deskService } from "./deskService.models";

export const DeskContainer = () => {
  const desk = useStore(deskService.outputs.$desk);
  const loading = useStore(deskService.outputs.$loading);
  const handleOpeningModal = useEvent(createTaskService.inputs.openModal);

  const { GetDesk } = deskService.inputs;

  const { id } = useParams();

  return (
    <>
      {id && <GetDesk deskId={id} />}
      <DeskPage
        desk={desk}
        loading={loading}
        handleOpeningModal={handleOpeningModal}
      />
    </>
  );
};
