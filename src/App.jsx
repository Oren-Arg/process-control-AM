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
import { UserData } from "./Data";

const App = () => {
  const [data, setData] = useState(null);

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
