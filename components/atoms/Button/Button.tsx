import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  additionalClassName?: string;
}

const Button = ({
  type = "button",
  children,
  onClick,
  additionalClassName,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${additionalClassName}`}
    >
      {children}
    </button>
  );
};

export default Button;
