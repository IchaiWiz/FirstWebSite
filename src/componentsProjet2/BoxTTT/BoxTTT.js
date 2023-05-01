import React from 'react';
import styles from './BoxTTT.module.css'; // Modifiez cette ligne

const BoxTTT = ({ value, onClick }) => {
    const style = value === 'X' ? `${styles.boxTTT} ${styles.x}` : `${styles.boxTTT} ${styles.o}`;
  
    return (
      <button className={style} onClick={onClick}>
        {value}
      </button>
    );
  };
  
  export default BoxTTT;
  