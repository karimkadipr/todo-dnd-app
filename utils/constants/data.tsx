import { Data } from "../types";
import { GrInProgress } from "react-icons/gr";
import { MdCloudDone } from "react-icons/md";
import { TbInnerShadowTopLeftFilled } from "react-icons/tb";

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

export const columnIcons = {
  todo: <TbInnerShadowTopLeftFilled />,
  inprogress: <GrInProgress />,
  done: <MdCloudDone />,
};
