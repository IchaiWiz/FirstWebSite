import React from "react";
import NavBarAcceuil from "../../components/NavBarAcceuil/NavBarAcceuil";
import "./Acceuil.css";
import imgprj1 from "../../../src/assets/RobotGentil.jpeg";
import imageprojet2 from "../../../src/assets/RobotFlippant.jpeg";
import { Link } from "react-router-dom";

const Acceuil = () => {
  return (
    <div className="all-acceuil">
      <NavBarAcceuil />
      <div className="containerStyle">
        <div className="cardStyle">
          <div className="titleContainerStyle">
            <h2 className="titleStyle">Mon projet numéro 1</h2>
          </div>
          <Link to="/GameCatchMeAcceuil">
            {" "}
            <img src={imgprj1} alt="Projet 1" className="imageStyle" />{" "}
          </Link>
          <Link to="/GameCatchMeAcceuil" className="linkStyle">
            Projet n°1
          </Link>
        </div>
        <div className="cardStyle">
          <div className="titleContainerStyle">
            <h2 className="titleStyle">Mon projet numéro 2</h2>
          </div>
          <Link to="/TTTGame">
            {" "}
            <img src={imageprojet2} alt="Projet 2" className="imageStyle" />
          </Link>
          <Link to="/TTTGame" className="linkStyle">
            Projet n°2
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Acceuil;
