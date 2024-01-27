import { columns, initialData } from "@/utils/constants/data";
import { ColumnId, Data, TaskType } from "@/utils/types";
import { DropResult } from "react-beautiful-dnd";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GlobalState {
  columns: Data;
  enabledLists: ColumnId[];
  setColumn: (result: DropResult) => void;
  addTask: (columnId: ColumnId, task: TaskType) => void;
  showHideList: (columnId: ColumnId) => void;
  sortTasks: (columnId: ColumnId, order: "asc" | "desc") => void;
}

const ASYNC_STORAGE_SAVED: string[] = ["columns", "enabledLists"];

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      columns: initialData,
      enabledLists: columns,

      showHideList: (columnId) =>
        set(({ enabledLists }) => {
          if (enabledLists.includes(columnId)) {
            return {
              enabledLists: enabledLists.filter((item) => item !== columnId),
            };
          }
          return {
            enabledLists: [...enabledLists, columnId].sort(
              (a, b) => columns.indexOf(a) - columns.indexOf(b)
            ),
          };
        }),

      setColumn: (result) =>
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
        }),

      addTask: (columnId, task) =>
        set((prev) => ({
          columns: {
            ...prev.columns,
            [columnId]: [...prev.columns[columnId], task],
          },
        })),

      sortTasks: (columnId, order) => {
        const direction = order === "desc" ? 1 : -1;
        set((prev) => ({
          columns: {
            ...prev.columns,
            [columnId]: prev.columns[columnId].sort((a, b) => {
              if (!a?.dueDate || !b?.dueDate) {
                return 0;
              }

              if (b.dueDate === a.dueDate) {
                return 0;
              }
              if (new Date(b.dueDate) < new Date(a.dueDate)) {
                return direction;
              }
              return -direction;
            }),
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
