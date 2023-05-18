import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n/config";
import flagEnglish from "../../assets/flags/flagEnglish.png";
import logoFr from "../../assets/flags/drapeauFr.png";
import { NavDropdown } from "react-bootstrap";

const DropI18N = () => {
  useTranslation();

  function handleClick(lang) {
    console.log("Attempting to change language to:", lang);
    i18next.changeLanguage(lang).then(() => {
      console.log("Language changed to:", i18next.language);
      localStorage.setItem("selectedLanguage", lang);
    });
  }

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      handleClick(storedLanguage);
    }
  }, []);

  return (
    <NavDropdown title={"Langue"} className="nav_dropi18n">
      <button className="nav_dropi18n-button" onClick={() => {
        console.log("Changing language to French");
        handleClick("fr");
      }}>
        <img
          width="35px"
          style={{ marginRight: "5px" }}
          src={logoFr}
          alt="logo France"
        />
        Français
      </button>
      <button className="nav_dropi18n-button" onClick={() => {
        console.log("Changing language to English");
        handleClick("en");
      }}>
        <img
          width="36px"
          style={{ marginRight: "5px" }}
          src={flagEnglish}
          alt="logo Angleterre"
        />
        English
      </button>
    </NavDropdown>
  );
};

export default DropI18N;
