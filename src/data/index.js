import { v4 as uuidv4 } from "uuid";

const mockData = [
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

export default mockData;
