//  REACT
import React from "react";

import { useState } from "react";

//  COMPONENTS
import FileImporter from "./components/FileImporter/FileImporter";
import BarChart from "./components/Charts/BarChart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

//  DATA

const App = () => {
  const [data, setData] = useState({
    labels: [
      "03/30/22 15:26:11",
      "03/30/22 15:27:51",
      "03/30/22 15:27:52",
      "03/30/22 15:27:53",
      "03/30/22 15:27:54",
      "03/30/22 15:27:55",
      "03/30/22 15:27:56",
      "03/30/22 15:27:27",
    ],
    datasets: [
      {
        label: "Pump1",
        data: [10, 20, 30, 40, 50, 60, 70, 90, 100, 200, 300, 400, 600],
      },
    ],
  });

  return (
    <>
      <Header />
      <Nav />
      <FileImporter data={setData} />
      {data && <BarChart data={data} />}
      <Footer />
    </>
  );
};

export default App;
