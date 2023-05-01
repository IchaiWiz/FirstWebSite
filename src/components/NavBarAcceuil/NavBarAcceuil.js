import React from "react";
import "./NavBarAcceuil.css";
import logoportfolio from "../../../src/assets/logoportfolio.png";
import { Link } from "react-router-dom";

const NavBarAcceuil = () => {
  return (
    <div>
      <nav className="nav_originale">
        <div className="nav_logo">
        
          <img src={logoportfolio} alt="Logo" />
          <span className="nav_name">Wizman Ichaï</span>
        </div>
        <ul className="nav_links">
      <li>
        <Link to="/home">Mon c.v.</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li className="nav_dropdown">
        <a href="/" className="nav_dropdown_link">React.js</a>
        <ul className="nav_dropdown_menu">
          <li>
            <Link to="/Counter">Counter</Link>
          </li>
          <li>
            <Link to="/Toogle">Toogle</Link>
          </li>
          <li>
            <Link to="/useEffectCompo">UseEffectCompo</Link>
          </li>
          <li>
            <Link to="/Metier">Metier</Link>
          </li>
          <li>
            <Link to="/List">List</Link>
          </li>
          <li>
            <Link to="/CountIntervalCompo">Chronomètre</Link>
          </li>
        </ul>
      </li>
    </ul>
      </nav>
    </div>
  );
};

export default NavBarAcceuil;
