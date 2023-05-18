import React from "react";
import { useTranslation } from "react-i18next";

const LevelInfo = ({ level }) => {
  const { t } = useTranslation();

  return <div><h3>{t("GameLevelInfo.levelInfo")}: {level}</h3></div>;
};

export default LevelInfo;
