import React from "react";
import { ColumnId } from "@/utils/types";
import { useGlobalStore } from "@/zustand/useGlobalStore";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "../TaskCard/TaskCard";
import { columnLabels } from "@/utils/constants/data";
import { PiSortAscendingBold } from "react-icons/pi";
import { HiSortAscending } from "react-icons/hi";

interface ColumnProps {
  columnId: ColumnId;
}

const Column = ({ columnId }: ColumnProps) => {
  const [columns, sortTasks] = useGlobalStore((state) => [
    state.columns,
    state.sortTasks,
  ]);

  return (
    <div className="h-full">
      <div className="pb-8 flex justify-between items-center bg-[#161a1d]">
        <h1 className="p-2 text-xs text-[#5E6C84]">
          {columnLabels[columnId]} {columns[columnId].length}
        </h1>
        {columns[columnId].length > 1 && (
          <div className="flex items-center gap-2 p-2">
            <button onClick={() => sortTasks(columnId, "asc")}>
              <PiSortAscendingBold />
            </button>
            <button onClick={() => sortTasks(columnId, "desc")}>
              <HiSortAscending />
            </button>
          </div>
        )}
      </div>
      <Droppable droppableId={columnId}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`h-full p-2 ${
              snapshot.isDraggingOver ? "bg-[#22272b]" : "bg-[#161a1d]"
            }`}
          >
            {columns[columnId].map((item, index) => {
              if (!item) {
                return null;
              }

              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <Task
                      provided={provided}
                      isDragging={snapshot.isDragging}
                      task={item}
                      columnId={columnId}
                    />
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
