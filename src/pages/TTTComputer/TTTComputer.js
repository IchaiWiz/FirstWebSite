import React, { useEffect, useState } from "react";
import styles from "./TTTComputer.module.css";
import Board from "../../componentsProjet2/Board/Board";
import ScoreBoard from "../../componentsProjet2/ScoreBoard/ScoreBoard";
import TTTReset from "../../componentsProjet2/TTTReset/TTTReset";

const TTT = () => {
  useEffect(() => {
    document.body.classList.add(styles.styleprojetN2);

    return () => {
      document.body.classList.remove(styles.styleprojetN2);
    };
  }, []);


  const Win_Conditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({xScore:0, oScore:0})
  const [gameOver, setGameOver] = useState(false)

  const handleBoxClick = (boxIdx) => {
    const uptdatedBoard = board.map((value, idx) => {
        if(idx === boxIdx) {
            return xPlaying === true ? "X" : "O";
        } else {
            return value;
        }
    })

    const winner = checkWinner(uptdatedBoard);

    if (winner) {
        if(winner === "O"){
            let {oScore} = scores;
            oScore += 1
            setScores({...scores, oScore})
        } else {
            let {xScore} = scores;
            xScore += 1
            setScores({...scores, xScore})
        }
    }

    setBoard(uptdatedBoard);

    setXPlaying (!xPlaying);
  }


  const checkWinner = (board) => {
    for (let i = 0; i < Win_Conditions.length; i++) {
        const [x,y,z] = Win_Conditions[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x]
      }
    }
  }


  const resetBoard = () =>{
    setGameOver(false);
    setBoard(Array(9).fill(null))
}

  return (
    <div>
        <div><p className={styles.infoTTT}>Bonjour ! Vous êtes devant un jeu de Croix & Rond. La nouvelle version dispose d'une option capable de jouer contre l'ordinateur ! Elle dispose de trois niveaux : Facile, Moyen et Difficile. Bonne chance !</p></div>
        <ScoreBoard scores={scores} xPlaying={xPlaying}/>
        <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick}/>
        <TTTReset resetBoard={resetBoard}/>
    </div>
  );
};

export default TTT;
