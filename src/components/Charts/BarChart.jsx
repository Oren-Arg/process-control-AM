import React from "react";
import { Line } from "react-chartjs-2";

// DISPLAYS THE CHART
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = (props) => {
  const dataSet = props.data;
  const options = {
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
    pan: {
      enabled: true,
      mode: "x",
    },
    zoom: {
      enabled: true,
      mode: "xy",
      sensitivity: 0.5,
    },
  };
  console.log(dataSet);
  return <Line data={dataSet} options={options} height={100} />;
};

export default BarChart;
