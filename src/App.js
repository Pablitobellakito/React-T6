import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Calculo from "./pages/Calculo";
import Noabrir from "./pages/Noabrir";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/calculo" element={<Calculo />} />
          <Route path="/noabrir" element={<Noabrir />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
