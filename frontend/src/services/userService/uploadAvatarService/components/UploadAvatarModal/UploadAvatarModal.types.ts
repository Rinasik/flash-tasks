import { BaseLayoutProps } from "../../../../../shared/types/baseLayoutProps";

export interface UploadAvatarModalProps extends BaseLayoutProps {
  show: boolean;
  handleClosingModal?: (() => void) | undefined;
  handleChange: (files: FileList) => void;
}
