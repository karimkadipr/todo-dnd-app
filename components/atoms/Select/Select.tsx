import React from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from "react-hook-form";

interface SelectProps {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  options: { label: string; value: string }[];
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

const Select = ({ register, error, label, id, options }: SelectProps) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register(id, { required: "Status is required" })}
      >
        <option value="">Select value</option>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      {typeof error === "string" && (
        <span className="text-red-500 text-xs">{error}</span>
      )}
    </div>
  );
};

export default Select;
