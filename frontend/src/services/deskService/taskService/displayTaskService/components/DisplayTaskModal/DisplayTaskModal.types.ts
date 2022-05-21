import { ITask } from "../../../taskService.types";

export interface DisplayTaskModalProps {
  show: boolean;
  handleClosingModal?: (() => void) | undefined;
}
