import { Data } from "../types";

export const columns = ["todo", "inprogress", "done"] as const;

export const initialData: Data = {
  todo: [],
  inprogress: [],
  done: [],
};

export const labels = {
  todo: "TO DO",
  inprogress: "IN PROGRESS",
  done: "DONE",
};
