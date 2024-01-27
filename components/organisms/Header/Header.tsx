import Filters from "@/components/molecules/Filters/Filters";
import NewTask from "@/components/molecules/NewTask.tsx/NewTask";
import React from "react";

const Header = () => {
  return (
    <>
      <NewTask />
      <Filters />
    </>
  );
};

export default Header;
