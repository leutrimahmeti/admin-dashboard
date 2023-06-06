import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import React from "react";

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: "gray",
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: "gray",
    },
    axisTicks: {
      color: "gray",
    },
    categories: [
      "2023-06-06T00:00:00.000Z",
      "2023-06-07T00:00:00.000Z",
      "2023-06-08T00:00:00.000Z",
      "2023-06-09T00:00:00.000Z",
      "2023-06-10T00:00:00.000Z",
      "2023-06-11T00:00:00.000Z",
      "2023-06-12T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.6,
      opacityTo: 0.3,
    },
  },
};

interface SeriesModel {
  name: string;
  data: number[];
}

interface ChartProps {
  data: SeriesModel[];
  height: number;
}

const Chart: React.FC<ChartProps> = ({ data, height }) => {
  return (
    <ReactApexChart
      options={options}
      series={data}
      type="area"
      height={height}
    />
  );
};
export default Chart;
