import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = (props) => {
  const userData = props.data;
  return <Line data={userData} height={100} />;
};

export default BarChart;
