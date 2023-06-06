import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import Chart from "../components/Chart";
const firstChart = [
  { name: "firstChart", data: [120, 10, 143, 40, 60, 120, 20] },
];
const secondChart = [
  { name: "secondChart", data: [40, 90, 73, 93, 74, 120, 180] },
];
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-3xl font-bold">Dashboard</div>

      <div className="flex flex-row gap-4">
        <div className="flex bg-white flex-col flex-auto p-6 bg-card shadow rounded-2xl overflow-hidden">
          <div className="justify-between flex">
            <span>Lorem.</span>
            <CiMenuKebab />
          </div>
          <div className="flex flex-col mt-2 items-center">
            <div className="text-7xl font-bold tracking-tight leading-none text-blue-500">
              79
            </div>
            <div className="text-lg font-medium text-blue-600 dark:text-blue-500">
              Due Tasks
            </div>
            <div className="flex items-baseline justify-center w-full mt-5 text-secondary">
              <div className="text-md font-medium truncate">Completed:</div>
              <div className="ml-1.5 text-lg font-semibold">13</div>
            </div>
          </div>
        </div>
        <div className="flex bg-white flex-col flex-auto p-6 bg-card shadow rounded-2xl overflow-hidden">
          <div className="justify-between flex">
            <span>Lorem.</span>
            <CiMenuKebab />
          </div>
          <div className="flex flex-col mt-2 items-center">
            <div className="text-7xl font-bold tracking-tight leading-none text-red-500">
              17
            </div>
            <div className="text-lg font-medium text-red-600 dark:text-red-500">
              Tasks
            </div>
            <div className="flex items-baseline justify-center w-full mt-5 text-secondary">
              <div className="text-md font-medium truncate">
                From yesterday:
              </div>
              <div className="ml-1.5 text-lg font-semibold">9</div>
            </div>
          </div>
        </div>
        <div className="flex bg-white flex-col flex-auto p-6 bg-card shadow rounded-2xl overflow-hidden">
          <div className="justify-between flex">
            <span>Lorem.</span>
            <CiMenuKebab />
          </div>
          <div className="flex flex-col mt-2 items-center">
            <div className="text-7xl font-bold tracking-tight leading-none text-amber-500">
              24
            </div>
            <div className="text-lg font-medium text-amber-600 dark:text-amber-500">
              Open
            </div>
            <div className="flex items-baseline justify-center w-full mt-5 text-secondary">
              <div className="text-md font-medium truncate">Closed today:</div>
              <div className="ml-1.5 text-lg font-semibold">19</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow bg-white rounded-xl p-8">
        <div className="text-md font-semibold">Lorem ipsum dolor sit amet.</div>
        <div className="w-full">
          <Chart data={firstChart} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
