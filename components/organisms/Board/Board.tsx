import React from "react";
import Column from "@/components/molecules/Column/Column";
import { columns } from "@/utils/constants/data";
import { DragDropContext } from "react-beautiful-dnd";
import { useGlobalStore } from "@/zustand/useGlobalStore";

const Board = () => {
  const setColumn = useGlobalStore((state) => state.setColumn);

  return (
    <DragDropContext onDragEnd={setColumn}>
      <div className="grid xl:grid-cols-3 gap-4">
        {columns.map((columnId) => (
          <Column key={columnId} columnId={columnId} />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;
