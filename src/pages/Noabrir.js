// ParentComponent.js
import React from "react";
import Header from "../components/Header";
import Noabrir from "../components/Noabrir";
import Footer from "../components/Footer";

function noabrir() {
  return (
    <>
      <div className="App">
        <Header />
        <Noabrir />
        <Footer />
      </div>
    </>
  );
}

export default noabrir;
