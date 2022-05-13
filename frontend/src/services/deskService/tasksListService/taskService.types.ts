import { TaskTinyResponseDto } from "../../../api/types";

export interface TaskProps {
    title?: string;
}

export interface TaskContainerProps {
    task?: TaskTinyResponseDto
}