import React from "react";
import { ColumnId } from "@/utils/types";
import { useGlobalStore } from "@/zustand/useGlobalStore";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "../TaskCard/TaskCard";
import { columnLabels } from "@/utils/constants/data";

interface ColumnProps {
  columnId: ColumnId;
}

const Column = ({ columnId }: ColumnProps) => {
  const columns = useGlobalStore((state) => state.columns);

  return (
    <Droppable droppableId={columnId}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={`p-2 ${
            snapshot.isDraggingOver ? "bg-[#22272b]" : "bg-[#161a1d]"
          }`}
        >
          <h1 className="p-4 pb-8 text-xs text-[#5E6C84]">
            {columnLabels[columnId]} {columns[columnId].length}
          </h1>
          {columns[columnId].map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <Task
                  provided={provided}
                  isDragging={snapshot.isDragging}
                  task={item}
                />
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Column;
