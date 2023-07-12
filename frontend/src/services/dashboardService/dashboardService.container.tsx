import { useEvent } from "effector-react";
import { createDeskService } from "../createDeskService/createDeskService.models";
import { DashboardPage } from "./components/DashboardPage";
import "./dashboardService.relations";

export const DashboardPageContainer = () => {
  const handleOpeningModal = useEvent(createDeskService.inputs.openModal);

  return <DashboardPage handleOpeningModal={handleOpeningModal} />;
};
