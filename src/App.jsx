//  REACT
import React from "react";

import FileImporter from "./components/FileImporter/FileImporter";
import { useState } from "react";

//  COMPONENTS
import BarChart from "./components/Charts/BarChart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

//  DATA
import { UserData } from "./Data";

const App = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });

  return (
    <>
      <Header />
      <Nav />
      <FileImporter data={setUserData} />
      <BarChart data={userData} />
      <Footer />
    </>
  );
};

export default App;
