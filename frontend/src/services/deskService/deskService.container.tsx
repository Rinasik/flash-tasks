import { useEvent, useStore } from "effector-react";
import { useParams } from "react-router-dom";
import { createTaskService } from "../createTaskService";
import { DeskPage } from "./components/DeskPage";
import { deskService } from "./deskService.models";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export const DeskContainer = () => {
  const desk = useStore(deskService.outputs.$desk);
  const loading = useStore(deskService.outputs.$loading);
  const handleOpeningModal = useEvent(createTaskService.inputs.openModal);

  const { GetDesk } = deskService.inputs;

  const { id } = useParams();

  return (
    <>
      {id && <GetDesk deskId={id} />}
      <DndProvider backend={HTML5Backend}>
        <DeskPage
          desk={desk}
          loading={loading}
          handleOpeningModal={handleOpeningModal}
        />
      </DndProvider>
    </>
  );
};
