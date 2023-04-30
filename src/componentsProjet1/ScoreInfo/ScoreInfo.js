import React from 'react';
import styles from './ScoreInfo.module.css';

const ScoreInfo = ({ successfulClicks, unsuccessfulHover, level }) => {
  const score = (successfulClicks - unsuccessfulHover) * level;

  return (
    <div className={styles['score-info']}>
      <h3>Score</h3>
      <p>{score}</p>
    </div>
  );
};

export default ScoreInfo;
