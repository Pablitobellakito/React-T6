import React from 'react';
import Navbar from './nav-bar';
import miGif from './img/skeletor.gif'; // Importa el GIF

const Header = () => {
  return (
    <header>
      <Navbar /> {/* Incluye el componente Navbar */}
      <div className="hero-text">
        <div className="persona">
          <img src={miGif} alt="Mi GIF" /> {}
        </div>
        <h1>Bienvenido</h1>
        <div className="persona">
          <img src={miGif} alt="Mi GIF" /> {}
        </div>
      </div>
    </header>
  );
};

export default Header;
