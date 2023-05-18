import React from "react";
import { useTranslation } from "react-i18next";

const RemainingClicks = ({ clicksRemaining }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h4>
        {t("GameRemainingClicks.clicksRemaining")}: {clicksRemaining}
      </h4>
    </div>
  );
};

export default RemainingClicks;
