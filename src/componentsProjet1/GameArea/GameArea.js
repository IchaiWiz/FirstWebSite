import React, { useRef } from "react";
import styles from "./GameArea.module.css";
import CatchObject from "../CatchObject/CatchObject";



const GameArea = ({
  setSuccessfulClicks,
  setUnsuccessfulHover,
  successfulClicks,
  unsuccessfulHover,
  level,setClicksRemaining,timeRemaining,showLostMessage
}) => {
  const gameAreaRef = useRef();

  return (
    <div className={styles["dark-container"]} ref={gameAreaRef}>
      <CatchObject
        gameAreaRef={gameAreaRef}
        setSuccessfulClicks={setSuccessfulClicks}
        setUnsuccessfulHover={setUnsuccessfulHover}
        successfulClicks={successfulClicks}
        unsuccessfulHover={unsuccessfulHover}
        level={level} setClicksRemaining={setClicksRemaining}
        showLostMessage={showLostMessage}
        gameOver={timeRemaining <= 0 || showLostMessage}
        
      />
    </div>
  );
};

export default GameArea;
