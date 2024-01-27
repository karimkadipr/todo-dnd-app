import { initialData } from "@/utils/constants/data";
import { ColumnId, Data, TaskType } from "@/utils/types";
import { DropResult } from "react-beautiful-dnd";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GlobalState {
  columns: Data;
  setColumn: (result: DropResult) => void;
  addTask: (columnId: ColumnId, task: TaskType) => void;
}

const ASYNC_STORAGE_SAVED: string[] = ["columns"];

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      columns: initialData,
      setColumn: (result) => {
        set((prev) => {
          if (!result.destination) {
            return prev;
          }

          const { columns } = prev;

          const sourceId = result.source.droppableId as ColumnId;
          const destinationId = result.destination.droppableId as ColumnId;

          const sourceTodos = columns[sourceId];
          const destinationTodos = columns[destinationId];
          const element = sourceTodos.splice(result.source.index, 1);

          destinationTodos.splice(result.destination.index, 0, element[0]);

          return {
            columns: {
              ...columns,
              [sourceId]: sourceTodos,
              [destinationId]: destinationTodos,
            },
          };
        });
      },

      addTask: (columnId, task) => {
        set((prev) => ({
          columns: {
            ...prev.columns,
            [columnId]: [...prev.columns[columnId], task],
          },
        }));
      },
    }),
    {
      name: "global-store",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) =>
            ASYNC_STORAGE_SAVED.includes(key)
          )
        ),
    }
  )
);
