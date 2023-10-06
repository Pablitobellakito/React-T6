import React from "react";
import miGif from "./img/giphy.gif"; // Importa el GIF
import "./Paragraph.css"; // Import the CSS file

const Paragraph = () => {
  return (
    <div>
      <div className="subjects">
        <div className="persona shadow">
          <h2>¿Quiénes Somos?</h2>
          <p>
            Nos definimos como un equipo de estudiantes que realmente se
            apasionan por idear soluciones tecnológicas innovadoras. Nuestro
            enfoque principal radica en comprender y aplicar los principios
            esenciales del diseño de software para abordar problemas complejos
            de manera efectiva. Aprovechamos al máximo nuestra variedad de
            habilidades y perspectivas individuales para colaborar de manera
            colaborativa en la concepción, planificación y ejecución de
            proyectos. Valoramos especialmente la comunicación abierta, el
            intercambio constante de ideas y nuestra capacidad de adaptación, lo
            que nos permite afrontar cambios en los requisitos y encontrar
            soluciones originales. En última instancia, nuestra meta radica en
            desarrollar nuestras habilidades en el diseño de software mientras
            trabajamos conjuntamente para dar vida a aplicaciones funcionales y
            de excelencia.
          </p>
        </div>
        <div className="">
          <img src={miGif} alt="Mi GIF" /> {}
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
