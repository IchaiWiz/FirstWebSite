import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css';
import { useTranslation } from 'react-i18next';

const Timer = ({ initialTime, onTimerEnd, level, resetTimer, }) => {
  const { t } = useTranslation();
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [showRestartButton, setShowRestartButton] = useState(false);
  const [showLostMessage, setShowLostMessage] = useState(false);

  useEffect(() => {
    if (timeRemaining <= 0) {
      onTimerEnd();
      setShowLostMessage(true)
      setShowRestartButton(true)
      return;
    }

    const timer = setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeRemaining, onTimerEnd, level]);

  useEffect(() => {
    if (resetTimer) {
      setTimeRemaining(initialTime);
    }
  }, [resetTimer, initialTime]);

  return (
    <div className={styles.timer}>
      <h3>{t("GameTimer.timeRemaining")}: {timeRemaining} s</h3>
     
      {showLostMessage && (
        <div className={styles.lostMessage}>{t("GameTimer.lostMessage")}</div>
      )}
      {showRestartButton && (
        <button className={styles.retryButton}
          style={{ pointerEvents : "auto"}}
          onClick={() => {
            window.location.reload();
          }}
        >
          {t("GameTimer.retry")}
        </button>
      )}
    </div>
  );
};

export default Timer;
