import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

interface AddTaskModalProps {
  showModal: boolean;
  onCloseModal: () => void;
  onCreateTask: (title: string) => void;
}

export const AddTaskModal = ({
  showModal,
  onCloseModal,
  onCreateTask,
}: AddTaskModalProps) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleNewTaskTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewTaskTitle(event.target.value);
  };

  const handleCreateTask = () => {
    if (newTaskTitle.trim() === "") return;

    onCreateTask(newTaskTitle);
    setNewTaskTitle("");
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 gap-6 flex flex-col rounded-xl shadow-md">
        <div className="flex justify-between items-center gap-4">
          <h2 className="text-2xl font-semibold">Create A New Ticket</h2>
          <div
            onClick={onCloseModal}
            className="flex justify-center items-center cursor-pointer w-8 h-8 bg-gray-200 rounded-full"
          >
            <IoMdClose className="w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <input
            type="text"
            placeholder="Ticket Title"
            value={newTaskTitle}
            onChange={handleNewTaskTitleChange}
            className="border border-gray-300 px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <div className="flex-grow" />
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              onClick={handleCreateTask}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
