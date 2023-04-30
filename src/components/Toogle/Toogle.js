import React, { useState } from "react";
import "./Toogle.css"

const Toogle = () => {
  const [toogle, setToogle] = useState(false);

  const toggleButton = toogle ? "toggle-button active" : "toggle-button";

  const handleToggle = () => {
    setToogle(!toogle);
  };

  return (
    <div className="toogle-page">
      {toogle && <div className="txt-toogle">Coucou</div>}
      <button className={toggleButton} onClick={handleToggle}>
        Cliquez ici !
      </button>
    </div>
  );
};

export default Toogle;
