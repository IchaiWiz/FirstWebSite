import React, { useState } from "react";
import "./Metier.css";
import { useTranslation } from "react-i18next";

const ExempleObject = () => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    id: 1,
    metier: t("nav.Metier.metier"),
    niveau: t("nav.Metier.niveau"),
  });

  const handleClickJunior = () => {
    setState((prevState) => ({ ...prevState, niveau: t("nav.Metier.junior") }));
  };

  const handleClickIntermediaire = () => {
    setState((prevState) => ({
      ...prevState,
      niveau: t("nav.Metier.intermediaire"),
    }));
  };

  const handleClickSenior = () => {
    setState((prevState) => ({ ...prevState, niveau: t("nav.Metier.senior") }));
  };

  return (
    <div className="metier-page">
      <div className="metier-container">
        <h1 className="h1-metier">
          {t("nav.Metier.me")} {state.metier} {state.niveau}
        </h1>
        <button className="btn-metier" onClick={handleClickJunior}>
          {t("nav.Metier.btn1")}
        </button>
        <button className="btn-metier" onClick={handleClickIntermediaire}>
          {t("nav.Metier.btn2")}
        </button>
        <button className="btn-metier" onClick={handleClickSenior}>
          {t("nav.Metier.btn3")}
        </button>
      </div>
    </div>
  );
};

export default ExempleObject;
