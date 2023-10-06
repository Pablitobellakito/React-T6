import React, { useState } from "react";

const Contacto = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <div className="formulario-container">
      {showAlert && (
        <div className="alert alert-success" role="alert">
          ¡Formulario enviado con éxito!
        </div>
      )}
      <p>
        En caso que quieras comunicarte con alguien de forma personal, puedes
        presionar en la parte final de la página los links disponibles que
        tenemos para cada uno de los integrantes presentes
      </p>
      <form className="containerformulario" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Completa el formulario</legend>

          <div className="contenerdor12">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Nombre"
            />
          </div>

          <div className="contenedor12">
            <label htmlFor="phone" className="form-label">
              Teléfono
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="99999999"
            />
          </div>

          <div className="contenedor12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="example@example.com"
            />
          </div>

          <div className="contenedor12">
            <label htmlFor="message" className="form-label">
              Mensaje
            </label>
            <textarea className="form-control" id="message" rows="2"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Contacto;
