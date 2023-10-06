import React from 'react';

const Contacto = () => {
  return (
    <div className='formulario-container'>
      <form className="container mt-4">
      <fieldset>
        <legend>Completa el formulario</legend>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input type="text" className="form-control" id="name" placeholder="Nombre" />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Teléfono
          </label>
          <input type="number" className="form-control" id="phone" placeholder="99999999" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" placeholder="example@example.com" />
        </div>

        <div className="mb-3">
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
