import { ColumnCreateDto } from "../../../../../../../api/types";

export interface ColumnFormProps  {
    column: ColumnCreateDto;
    onChange: (value:ColumnCreateDto) => void;
}