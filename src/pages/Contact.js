// ParentComponent.js
import React from "react";
import Header from "../components/Header";
import Contacto from "../components/contacto";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
    <div className="App">
      <Header />
      <Contacto />
      <Footer />
    </div>
    </>
  );
}

export default Contact;
