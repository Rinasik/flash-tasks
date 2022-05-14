export interface ColumnForm {
  id: string;
  name: string;
  color?: string;
}

export interface TaskForm {
  title: string;
  description: string;
  columnId: string;
}

export interface CreateTaskFormProps {
  handleSubmit: (payload: TaskForm) => void;
  loading: boolean;
  columnsList: ColumnForm[];
}
