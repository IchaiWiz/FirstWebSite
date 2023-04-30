import React, { useState, useEffect, useRef } from "react";
import styles from "./CatchObject.module.css";

const CatchObject = ({
  gameAreaRef,
  setSuccessfulClicks,
  setUnsuccessfulHover,
  setClicksRemaining,
  gameOver,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const escapeTimeout = useRef(null);
  const objectSize = 50; // You can adjust the size of the object here
  const [level] = useState(1);
  const [rotation, setRotation] = useState(0);
  const objectWidth = 35; // Modifiez cette valeur pour ajuster la largeur de l'objet
  const objectHeight = 80; // Modifiez cette valeur pour ajuster la hauteur de l'objet
  const [objectClicked, setObjectClicked] = useState(false);

  

  useEffect(() => {
    const interval = setInterval(() => {
        const rotationSpeed = 1 + 5 * Math.log(level + 1);
        const newRotation = rotation + rotationSpeed;
      setRotation(newRotation);
    }, 1000 / 60); // 60 FPS

    return () => clearInterval(interval);
  }, [rotation, level]);

  useEffect(() => {
    if (!gameAreaRef.current) return;
    if(gameOver) return;

    const gameAreaRect = gameAreaRef.current.getBoundingClientRect();
    const newX =
      gameAreaRect.left + Math.random() * (gameAreaRect.width - objectSize * 2);
    const newY =
      gameAreaRect.top + Math.random() * (gameAreaRect.height - objectSize * 2);

    setPosition({ x: newX, y: newY });
  }, [level, gameAreaRef, gameOver]);

  useEffect(() => {
    if (isHovering) {
      const escapeTime = 3000 * Math.exp(-2.2 * level);
  
      escapeTimeout.current = setTimeout(() => {
        setIsHovering(false);
  
        const gameAreaRect = gameAreaRef.current.getBoundingClientRect();
        const newX =
          gameAreaRect.left +
          Math.random() * (gameAreaRect.width - objectSize * 2);
        const newY =
          gameAreaRect.top +
          Math.random() * (gameAreaRect.height - objectSize * 2);
  
        setPosition({ x: newX, y: newY });
  
        if (!objectClicked) {
          setUnsuccessfulHover((unsuccessfulHover) => unsuccessfulHover + 1);
        } else {
          setObjectClicked(false);
        }
      }, escapeTime);
    } else {
      clearTimeout(escapeTimeout.current);
    }
  }, [isHovering, gameAreaRef, level, objectClicked, setUnsuccessfulHover, gameOver]);

  const handleClick = (e) => {
    if (gameOver) return;
    e.stopPropagation();

    clearTimeout(escapeTimeout.current);
    setIsHovering(false);

    const gameAreaRect = gameAreaRef.current.getBoundingClientRect();
    const newX =
      gameAreaRect.left + Math.random() * (gameAreaRect.width - objectSize * 2);
    const newY =
      gameAreaRect.top + Math.random() * (gameAreaRect.height - objectSize * 2);

    setPosition({ x: newX, y: newY });
    setSuccessfulClicks((successfulClicks) => successfulClicks + 1);
    setObjectClicked(true);
    setClicksRemaining((prevClicksRemaining) => prevClicksRemaining - 1);


  };

  const onMouseEnter = () => {
    if (gameOver) return;
    setIsHovering(true);
  };

  return (
    <div
      className={styles["catch-object"]}
      style={{
        width: `${objectWidth}px`,
        height: `${objectHeight}px`,
        transform: `rotate(${rotation}deg)`,
        left: position.x,
        top: position.y,
        pointerEvents: gameOver ? "none" : "auto",
      }}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
    />
  );
};

export default CatchObject;
