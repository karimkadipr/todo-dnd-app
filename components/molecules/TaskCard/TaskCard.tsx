import React from "react";
import { TaskType } from "@/utils/types";
import { DraggableProvided } from "react-beautiful-dnd";

interface TaskProps {
  task: TaskType;
  provided: DraggableProvided;
  isDragging: boolean;
}

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  userSelect: "none",
  padding: 32,
  margin: `0 0 16px 0`,
  background: "#1c2b41",
  border: isDragging ? "2px solid #579dff" : "",
  ...draggableStyle,
});

const Task = ({ provided, isDragging, task }: TaskProps) => {
  return (
    <div
      className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={getItemStyle(isDragging, provided.draggableProps.style)}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {task.title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {task.description}
      </p>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
};

export default Task;
