import React from "react";
import Filter from "@/components/atoms/Filter/Filter";
import { columns } from "@/utils/constants/data";

const Filters = () => {
  return (
    <div className="flex items-center mb-4">
      <span className="mr-4">Lists:</span>
      {columns.map((columnId) => (
        <Filter columnId={columnId} />
      ))}
    </div>
  );
};

export default Filters;
