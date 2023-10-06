import React from "react";
import Navbar from "./nav-bar";

const Header = () => {
  return (
    <header>
      <div className="hero-text">
        <div className="solopresentacion">
          <h1>Los Photoshopers</h1>
        </div>
        <div className="solonavbar">
          <Navbar /> {}
        </div>
      </div>
    </header>
  );
};

export default Header;
