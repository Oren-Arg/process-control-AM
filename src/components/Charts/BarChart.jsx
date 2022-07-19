import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = (props) => {
  const dataSet = props.data;
  console.log(dataSet);
  return <Line data={dataSet} height={100} />;
};

export default BarChart;
