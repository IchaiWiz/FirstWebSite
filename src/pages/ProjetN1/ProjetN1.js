import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./ProjetN1.module.css";

const ProjetN1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const previousBodyStyle = document.body.style.backgroundColor;
  
    document.body.style.backgroundColor = '#333'; 
  
    return () => {
      document.body.style.cssText = previousBodyStyle;
    };
  }, []);

  useEffect(() => {
    navigate('/GameAcceuil');
  }, [navigate]);

  return (
    <div className={styles['projet-n1']}>
    </div>
  );
};

export default ProjetN1;
