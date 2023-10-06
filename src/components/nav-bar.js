import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container"> {/* Agrega la clase navbar-container aquí */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link"><p>Inicio</p></Link>
          </li>
          <li className="navbar-item">
            <Link to="/calculo" className="navbar-link"><p>Cálculos</p></Link>
          </li>
          <li className="navbar-item">
            <Link to="/contacto" className="navbar-link"><p>Contacto</p></Link>
          </li>
          <li className="navbar-item">
            <Link to="/noabrir" className="navbar-link"><p>No Abrir</p></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
