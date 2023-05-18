import React from "react";
import styles from "./ScoreInfo.module.css";
import { useTranslation } from "react-i18next";

const ScoreInfo = ({ successfulClicks, unsuccessfulHover, level }) => {
  const { t } = useTranslation();
  const score = (successfulClicks - unsuccessfulHover) * level;

  return (
    <div className={styles["score-info"]}>
      <h3>{t("GameScoreInfo.score")} : {score}</h3>
      
    </div>
  );
};

export default ScoreInfo;
