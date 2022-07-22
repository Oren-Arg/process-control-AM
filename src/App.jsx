//  REACT
import React from "react";

<<<<<<< HEAD
import FileImporter from "./components/FileImporter/FileImporter";
import { useState , useEffect} from "react";
=======
import { useState } from "react";
>>>>>>> 8ceea42c053131dbbf66880c97181ad5028bf780

//  COMPONENTS
import FileImporter from "./components/FileImporter/FileImporter";
import BarChart from "./components/Charts/BarChart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

//  DATA
import { UserData } from "./Data";

const App = () => {
<<<<<<< HEAD
  const [userData, setUserData] = useState({});
=======
  const [data, setData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });
>>>>>>> 8ceea42c053131dbbf66880c97181ad5028bf780

  return (
    <>
      <Header />
      <Nav />
      <FileImporter data={setData} />
      <BarChart data={data} />
      <Footer />
    </>
  );
};

export default App;
