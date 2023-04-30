import React from "react";
import NavBarAcceuil from "../../components/NavBarAcceuil/NavBarAcceuil";
import "./Acceuil.css";
import imgprj1 from "../../../src/assets/RobotGentil.jpeg"
import imageprojet2 from "../../../src/assets/RobotFlippant.jpeg"
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
        <img src={imgprj1} alt="Projet 1" className="imageStyle" />
            <Link to="/ProjetN1" className="linkStyle">Projet n°1</Link>
      </div>
      <div className="cardStyle">
        <div className="titleContainerStyle">
          <h2 className="titleStyle">Mon projet numéro 2</h2>
        </div>
        <img
          src={imageprojet2}
          alt="Projet 2"
          className="imageStyle"
        />
        <Link to="/Counter" className="linkStyle">Projet n°2</Link>
      </div>
      {/* Vous pouvez ajouter encore plus de projets ici */}
    </div>
    </div>
  );
}
export default Acceuil;
  