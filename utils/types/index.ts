import { columns } from "../constants/data";

export type TaskType = {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
};

export type ColumnType = {
  id: string;
  title: string;
  taskIds: string[];
};

export type Data = {
  [key in ColumnId]: TaskType[];
};

export type ColumnId = "todo" | "inprogress" | "done";
