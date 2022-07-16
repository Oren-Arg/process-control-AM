import React from "react";
import Charts from "./components/Charts/Charts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <>
      <Header />

      <Nav />
      <Charts />
      <Footer />
    </>
  );
};

export default App;
