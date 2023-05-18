import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './MouseMove.module.css';
import { useTranslation } from 'react-i18next';

const MouseTracker = () => {
  const { t } = useTranslation();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      console.log('position', { x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.alltracker}>
      <div className={styles.trackercontainer}>
        <Link to="/">
          <button className={styles.btntracker}>{t('nav.MouseTracker.retour')}</button>
        </Link>
        <p>{t('nav.MouseTracker.position')}</p>
        <p>
          X: {position.x}, Y: {position.y}
        </p>
      </div>
    </div>
  );
};

export default MouseTracker;
