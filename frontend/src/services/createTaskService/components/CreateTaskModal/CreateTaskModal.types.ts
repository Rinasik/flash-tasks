import { BaseLayoutProps } from "../../../../shared/types/baseLayoutProps";

export interface CreateTaskModalProps extends BaseLayoutProps {
    show: boolean;
    handleClosingModal?: (()=> void) | undefined;
}