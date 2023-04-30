import React, { useState } from "react";
import "./Metier.css";
const ExempleObject = () => {
  const [state, setState] = useState({
    id: 1,
    metier: "Fullstack developper",
    niveau: "en formation",
  });

  const handleClickJunior = () => {
    setState((prevState) => ({ ...prevState, niveau: "Junior" }));
  };

  const handleClickIntermediaire = () => {
    setState((prevState) => ({ ...prevState, niveau: "Intermediaire" }));
  };

  const handleClickSenior = () => {
    setState((prevState) => ({ ...prevState, niveau: "Senior" }));
  };

  return (
    <div className="metier-page">
      <div className="metier-container">
      <h1 className="h1-metier">
        Je suis {state.metier} {state.niveau}
      </h1>
      <button className="btn-metier" onClick={handleClickJunior}>dans 3 mois je serais</button>
      <button className="btn-metier" onClick={handleClickIntermediaire}>dans 1 an je serais</button>
      <button className="btn-metier" onClick={handleClickSenior}>dans 5 ans je serais</button>
    </div>
    </div>
  );
};

export default ExempleObject;
