import React from "react";
import { ColumnId, TaskType } from "@/utils/types";
import { DraggableProvided } from "react-beautiful-dnd";
import { columnIcons } from "@/utils/constants/data";

interface TaskProps {
  task: TaskType;
  provided: DraggableProvided;
  isDragging: boolean;
  columnId: ColumnId;
}

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  userSelect: "none",
  padding: 32,
  margin: `0 0 16px 0`,
  background: "#1c2b41",
  border: isDragging ? "2px solid #579dff" : "",
  ...draggableStyle,
});

const Task = ({ provided, isDragging, task, columnId }: TaskProps) => {
  const icon = columnIcons[columnId];
  return (
    <div
      className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={getItemStyle(isDragging, provided.draggableProps.style)}
    >
      <div className="flex justify-between items-center mb-2">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {task.title}
        </h5>
        {icon}
      </div>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {task.description}
      </p>
      <p className="flex justify-end mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs">
        {task.dueDate}
      </p>
    </div>
  );
};

export default Task;
