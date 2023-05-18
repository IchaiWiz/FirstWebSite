import React from 'react';
import styles from './TTTReset.module.css';
import { useTranslation } from 'react-i18next';

const TTTReset = ({ resetBoard }) => {
  const { t } = useTranslation();

  return (
    <button className={styles.reset} onClick={resetBoard}>
      {t('TTTReset.reset')}
    </button>
  );
};

export default TTTReset;
