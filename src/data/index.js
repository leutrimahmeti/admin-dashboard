import { v4 as uuidv4 } from "uuid";

export const boardMockData = [
  {
    id: uuidv4(),
    title: "To do",
    tasks: [
      {
        id: uuidv4(),
        title: "Fix login page styling",
      },
      {
        id: uuidv4(),
        title: "Implement user authentication",
      },
      {
        id: uuidv4(),
        title: "Add error handling for form validation",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "In Progress",
    tasks: [
      {
        id: uuidv4(),
        title: "Refactor codebase",
      },
      {
        id: uuidv4(),
        title: "Optimize performance",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Done",
    tasks: [
      {
        id: uuidv4(),
        title: "Write unit tests",
      },
      {
        id: uuidv4(),
        title: "Deploy to production",
      },
    ],
  },
];
export const usersMockData = [
  {
    id: 1,
    name: "Liam Clark",
    status: "Deactivated",
  },
  {
    id: 2,
    name: "Ava Martinez",
    status: "Activated",
  },
  {
    id: 3,
    name: "Noah Johnson",
    status: "Activated",
  },
  {
    id: 4,
    name: "Emma Thompson",
    status: "Deactivated",
  },
  {
    id: 5,
    name: "Sophia Walker",
    status: "Activated",
  },
  {
    id: 6,
    name: "Michael Allen",
    status: "Activated",
  },
  {
    id: 7,
    name: "Isabella Davis",
    status: "Deactivated",
  },
  {
    id: 8,
    name: "James Wilson",
    status: "Activated",
  },
  {
    id: 9,
    name: "Olivia Moore",
    status: "Activated",
  },
];
