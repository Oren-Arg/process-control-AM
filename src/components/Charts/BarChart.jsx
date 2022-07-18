import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useContext } from "react";
import { dataContext } from "../../context/context";

const BarChart = () => {
  const { userData } = useContext(dataContext);
  return <Line data={userData} height={100} />;
};

export default BarChart;
