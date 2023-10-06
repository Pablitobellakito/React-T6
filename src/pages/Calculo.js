// ParentComponent.js
import React from "react";
import Header from "../components/Header";
import Calculadoras from "../components/Calculadoras";
import Footer from "../components/Footer";

function Calculo() {
  return (
    <>
      <div className="App">
        <Header />
        <Calculadoras />
        <Footer />
      </div>
    </>
  );
}

export default Calculo;
