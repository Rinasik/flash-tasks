import { DeskResponseDto, ReplaceTaskRequestPayloadDto } from "../../api/types";

export interface Desk extends DeskResponseDto {}

export interface GetDeskProps {
  deskId: string;
}

export interface DeskPageProps {
  desk: Desk | null;
  loading?: boolean;
  handleOpeningModal: () => void;
}

export interface IReplaceTask extends ReplaceTaskRequestPayloadDto {}
