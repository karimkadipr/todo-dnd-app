import { columnLabels } from "@/utils/constants/data";
import { ColumnId } from "@/utils/types";
import React from "react";
import Button from "../Button/Button";
import { useGlobalStore } from "@/zustand/useGlobalStore";

interface FilterProps {
  columnId: ColumnId;
}

const Filter = ({ columnId }: FilterProps) => {
  const [enabledLists, showHideList] = useGlobalStore((state) => [
    state.enabledLists,
    state.showHideList,
  ]);

  const isListEnabled = enabledLists.includes(columnId);

  return (
    <Button
      additionalClassName={`${
        !isListEnabled ? "dark:opacity-50" : ""
      } text-xs mb-0`}
      onClick={() => showHideList(columnId)}
    >
      {columnLabels[columnId]}
    </Button>
  );
};

export default Filter;
