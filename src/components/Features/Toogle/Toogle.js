import React, { useState } from "react";
import "./Toogle.css"
import { useTranslation } from "react-i18next";

const Toogle = () => {

  const { t } = useTranslation();

  const [toogle, setToogle] = useState(false);

  const toggleButton = toogle ? "toggle-button active" : "toggle-button";

  const handleToggle = () => {
    setToogle(!toogle);
  };

  return (
    <div className="toogle-page">
      {toogle && <div className="txt-toogle">{t('nav.Toogle.msg')}</div>}
      <button className={toggleButton} onClick={handleToggle}>
      {t('nav.Toogle.btn')}
      </button>
    </div>
  );
};

export default Toogle;
