import { Data } from "../types";

export const columns: ("todo" | "inprogress" | "done")[] = [
  "todo",
  "inprogress",
  "done",
];

export const initialData: Data = {
  todo: [],
  inprogress: [],
  done: [],
};

export const columnLabels = {
  todo: "TO DO",
  inprogress: "IN PROGRESS",
  done: "DONE",
};
