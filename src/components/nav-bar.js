import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      {" "}
      {/* Agrega la clase navbar-container aquí */}
      <nav className="navbar">
        <ul className="navbar-list">
          <Link to="/" className="navbar-link">
            <li className="navbar-item">
              <p>Inicio</p>
            </li>
          </Link>
          <Link to="/calculo" className="navbar-link">
            <li className="navbar-item">
              <p>Cálculos</p>
            </li>
          </Link>
          <Link to="/contacto" className="navbar-link">
            <li className="navbar-item">
              <p>Contacto</p>
            </li>
          </Link>
          <Link to="/noabrir" className="navbar-link">
            <li className="navbar-item">
              <p>No Abrir</p>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
