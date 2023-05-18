import React, { useState, useEffect } from "react";
import styles from "./GameCatchMeAcceuil.module.css";
import beep from "../../../src/assets/RaceSound.mp3";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GameAcceuil = () => {
  const Navigate = useNavigate();
  const { t } = useTranslation();
  const [titleVisible, setTitleVisible] = useState(true);
  const [countdown, setCountdown] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (countdown === "Go !") {
      setTimeout(() => {
        Navigate("/GameCatchMe");
      }, 1000);
    }
  }, [countdown, Navigate]);

  const startCountdown = (event) => {
    event.preventDefault();
    setTitleVisible(false);
    setButtonDisabled(true); 
    let count = 3;
    const audio = new Audio(beep); 
    audio.onerror = function () {
      console.error("Erreur lors de la lecture du fichier audio.");
    };
    const interval = setInterval(() => {
      setCountdown(count + "...");
      audio.play();
      if (count === 0) {
        clearInterval(interval);
        setCountdown("Go !");
      }
      count--;
    }, 1400);
  };

  return (
    <div className={styles["game-acceuil"]}>
      {titleVisible && (
        <h1
          className={styles["game-title"]}
          onMouseEnter={() => setTitleVisible(false)}
        >
          {t("GameAcceuil.title")}
        </h1>
      )}
      {!titleVisible && (
        <>
          <button
            className={styles["start-button"]}
            onClick={(event) => startCountdown(event)}
            disabled={buttonDisabled}
          >
            {t("GameAcceuil.launch")}
          </button>
          <p className={styles["rules"]}>{t("GameAcceuil.rules")}</p>
        </>
      )}
      <div className={[`${styles["countdown-text"]}`]}>{countdown}</div>
    </div>
  );
};

export default GameAcceuil;
