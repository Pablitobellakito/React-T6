import React from "react";
import Navbar from "./nav-bar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="hero-text">
        <div className="solopresentacion">
          <Link to="/">
            <h1>Los Photoshopers</h1>
          </Link>
        </div>
        <div className="solonavbar">
          <Navbar /> {}
        </div>
      </div>
    </header>
  );
};

export default Header;
