import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Inicio</Link>
        </li>
        <li className="navbar-item">
          <Link to="/calculo" className="navbar-link">Cálculos</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contacto" className="navbar-link">Contacto</Link>
        </li>
        <li className="navbar-item">
          <Link to="/noabrir" className="navbar-link1"><p>No Abrir</p></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
