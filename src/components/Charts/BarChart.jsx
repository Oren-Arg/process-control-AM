import React from "react";
import { Line } from "react-chartjs-2";
import * as brush from "chartjs-plugin-brush";
import zoom from "chartjs-plugin-zoom";
// DISPLAYS THE CHART

import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const BarChart = (props) => {
  const dataSet = props.data;
  const options = {
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
  };
  console.log(dataSet);
  return <Line data={dataSet} options={options} height={100} />;
};

export default BarChart;
