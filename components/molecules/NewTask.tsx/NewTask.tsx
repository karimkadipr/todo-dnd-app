import React, { useState } from "react";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Select from "@/components/atoms/Select/Select";
import { TaskType } from "@/utils/types";
import { useGlobalStore } from "@/zustand/useGlobalStore";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const NewTask = () => {
  const [isAddEnabled, setIsAddEnabled] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const addTask = useGlobalStore((state) => state.addTask);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { status, ...rest } = data;

    const task = {
      id: String(Date.now()),
      ...rest,
    } as TaskType;

    addTask(status, task);
    reset();
    setIsAddEnabled(false);
  };
  console.log(errors);
  if (!isAddEnabled) {
    return (
      <div className="flex justify-end">
        <Button onClick={() => setIsAddEnabled(true)}>Add new</Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 mb-4 rounded-md border border-gray-700"
    >
      <Input
        id="title"
        label="Title"
        register={register}
        error={errors.title?.message}
      />
      <Input
        id="description"
        label="Description"
        register={register}
        error={errors.description?.message}
      />
      <Select
        id="status"
        label="Status"
        register={register}
        error={errors.status?.message}
      />
      <Input
        type="date"
        id="dueDate"
        label="Due Date"
        register={register}
        error={errors.dueDate?.message}
      />
      <div className="flex gap-2 justify-end">
        <Button onClick={() => setIsAddEnabled(false)}>Cancel</Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default NewTask;
