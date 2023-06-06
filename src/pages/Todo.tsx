import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { boardMockData } from "../data";
import { AiOutlinePlus } from "react-icons/ai";
import { AddTaskModal } from "../components/AddTaskModal";
import { Card } from "../components/Card";
interface Task {
  id: string;
  title: string;
}

interface Section {
  id: string;
  title: string;
  tasks: Task[];
}

export function Todo() {
  const [data, setData] = useState<Section[]>(boardMockData);
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData([...data]);
    }
  };

  const getGradient = (title: string) => {
    if (title === "To do") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(251, 191, 36) 163.54%)",
      };
    } else if (title === "In Progress") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(59, 130, 246) 163.54%)",
      };
    } else if (title === "Done") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(245, 101, 101) 163.54%)",
      };
    }
  };

  const handleCreateTask = (title: string) => {
    if (title.trim() === "") return;

    if (selectedSection) {
      const newTask: Task = {
        id: String(Date.now()),
        title: title,
      };

      const updatedData = data.map((section) => {
        if (section.id === selectedSection.id) {
          return {
            ...section,
            tasks: [...section.tasks, newTask],
          };
        }
        return section;
      });

      setData(updatedData);
    }

    setShowModal(false);
    setSelectedSection(null);
  };

  const handleDeleteTask = (taskId: string, sectionId: string) => {
    const updatedData = data.map((section) => {
      if (section.id === sectionId) {
        const updatedTasks = section.tasks.filter((task) => task.id !== taskId);
        return {
          ...section,
          tasks: updatedTasks,
        };
      }
      return section;
    });

    setData(updatedData);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddTask = (section: Section) => {
    setSelectedSection(section);
    setShowModal(true);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col gap-8">
        <div className="text-3xl font-bold">Board</div>
        <div className="flex gap-6">
          {data.map((section) => (
            <Droppable key={section.id} droppableId={section.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  className="w-full flex flex-col gap-4 bg-white rounded-xl p-4"
                  ref={provided.innerRef}
                >
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-semibold">{section.title}</div>
                    <div
                      className="flex items-center justify-center hover:cursor-pointer w-10 h-10 hover:bg-[#e9e9e9] rounded-full"
                      onClick={() => handleAddTask(section)}
                    >
                      <AiOutlinePlus className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex gap-6 flex-col">
                    {section.tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided, snapyshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              opacity: snapyshot.isDragging ? "0.5" : "1",
                            }}
                          >
                            <Card
                              style={{ ...getGradient(section.title) }}
                              onDelete={() =>
                                handleDeleteTask(task.id, section.id)
                              }
                            >
                              {task.title}
                            </Card>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </div>
      <AddTaskModal
        showModal={showModal}
        onCloseModal={handleCloseModal}
        onCreateTask={handleCreateTask}
      />
    </DragDropContext>
  );
}
