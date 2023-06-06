import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import Chart from "../components/Chart";
import { CardData } from "../Types/types";
const firstChart = [
  {
    name: "firstChart",
    data: [120, 10, 143, 40, 60, 120, 20],
    color: "orange",
  },
];

const cardData: CardData[] = [
  {
    label: "Due Tasks",
    value: 79,
    color: "blue",
    description: "Due Tasks",
    subLabel: "Completed:",
    subValue: 13,
  },
  {
    label: "Tasks",
    value: 17,
    color: "red",
    description: "Tasks",
    subLabel: "From yesterday:",
    subValue: 9,
  },
  {
    label: "Open",
    value: 24,
    color: "amber",
    description: "Open",
    subLabel: "Closed today:",
    subValue: 19,
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-3xl font-bold">Dashboard</div>

      <div className="flex flex-row gap-4">
        {cardData.map((data, index) => {
          let textColorClass = "";

          if (data.color === "blue") {
            textColorClass = "text-blue";
          } else if (data.color === "red") {
            textColorClass = "text-red";
          } else if (data.color === "amber") {
            textColorClass = "text-amber";
          }

          return (
            <div
              key={index}
              className={`flex bg-white flex-col flex-auto p-6 bg-card shadow rounded-2xl overflow-hidden`}
            >
              <div className="justify-between flex">
                <span>{data.label}</span>
                <CiMenuKebab />
              </div>
              <div className="flex flex-col mt-2 items-center">
                <div
                  className={`text-7xl font-bold tracking-tight leading-none ${textColorClass}`}
                >
                  {data.value}
                </div>
                <div
                  className={`text-lg font-medium ${textColorClass} dark:${textColorClass}`}
                >
                  {data.description}
                </div>
                <div className="flex items-baseline justify-center w-full mt-5 text-secondary">
                  <div className="text-md font-medium truncate">
                    {data.subLabel}
                  </div>
                  <div className="ml-1.5 text-lg font-semibold">
                    {data.subValue}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
