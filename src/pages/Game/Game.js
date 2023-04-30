import React, { useState, useEffect } from "react";
import styles from "./Game.module.css";
import GameArea from "../../componentsProjet1/GameArea/GameArea";
import HighScore from "../../componentsProjet1/HighScore/HighScore";
import LevelInfo from "../../componentsProjet1/LevelInfo/LevelInfo";
import RemainingClicks from "../../componentsProjet1/RemainingClicks/RemainingClicks";
import ScoreInfo from "../../componentsProjet1/ScoreInfo/ScoreInfo";
import Timer from "../../componentsProjet1/Timer/Timer";
import Layout from "../../componentsProjet1/LayoutGame/LayoutGame";

const Game = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const initialTime = 60;
  const [setTimeRemaining] = useState(initialTime);
  const [successfulClicks, setSuccessfulClicks] = useState(0);
  const [unsuccessfulHover, setUnsuccessfulHover] = useState(0);
  const [level, setLevel] = useState(1);
  const [clicksRemaining, setClicksRemaining] = useState(3);
  const [showLostMessage] = useState(false);

  useEffect(() => {
    setGameOver(showLostMessage);
  }, [showLostMessage]);

  useEffect(() => {
    if (clicksRemaining === 0) {
      setLevel((prevLevel) => prevLevel + 1);
      setClicksRemaining(10);
    }
  }, [clicksRemaining]);

  const [gameOver, setGameOver] = useState(false);
  const [timeRemaining] = useState(initialTime);

  const handleTimerEnd = () => {
    setGameOver(true);
    setLevel(1);
    setSuccessfulClicks(0);
    setUnsuccessfulHover(0);
  };

  const updatePlayerScore = (newScore) => {
    setPlayerScore(newScore);
  };


  return (
  <div><Layout>
    <div className={styles["game-zone"]}>
      
      <div className={styles["game-area"]}>
        <GameArea
          setSuccessfulClicks={setSuccessfulClicks}
          setUnsuccessfulHover={setUnsuccessfulHover}
          successfulClicks={successfulClicks}
          unsuccessfulHover={unsuccessfulHover}
          level={level}
          setClicksRemaining={setClicksRemaining}
          setTimeRemaining={setTimeRemaining}
          timeRemaining={timeRemaining}
          gameOver={timeRemaining <= 0 || showLostMessage}
          showLostMessage={showLostMessage}
        />
        <div
          className={styles.overlay}
          style={{ display: gameOver ? "block" : "none" }}
        ></div>
      </div>
      <div className={styles["side-info"]}>
      <HighScore playerScore={playerScore} updatePlayerScore={updatePlayerScore} />
        <LevelInfo
          level={level}
          successfulClicks={successfulClicks}
          unsuccessfulHover={unsuccessfulHover}
          clicksRemaining={clicksRemaining}
        />
        <RemainingClicks clicksRemaining={clicksRemaining} />
        <ScoreInfo
          successfulClicks={successfulClicks}
          unsuccessfulHover={unsuccessfulHover}
          level={level}
        />

        <Timer initialTime={initialTime} onTimerEnd={handleTimerEnd} />
        
      </div>
      
    </div></Layout></div>
  );
};

export default Game;
