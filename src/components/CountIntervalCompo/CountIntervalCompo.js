import React, { useState, useEffect } from 'react';
import './CountIntervalCompo.css';

const CountIntervalCompo = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const SetIntervalId = setInterval(() => {
      setTime((prevstate) => (prevstate + 1));
    }, 1000);

    return () => clearInterval(SetIntervalId);
  }, []); // N'oubliez pas d'ajouter un tableau vide comme dépendance pour éviter des exécutions inutiles

  return (
    <div className='CountIntervalCompo'>
      <h1>mon compteur tourne depuis : {time}</h1>
    </div>
  );
};

export default CountIntervalCompo;
