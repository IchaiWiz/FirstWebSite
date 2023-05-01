import React from 'react'
import BoxTTT from '../BoxTTT/BoxTTT'
import styles from "./Board.module.css"

const Board = ({board, onClick}) => {
  return (
    <div className={styles.board}>
        {board.map((value, idx) => {
       return <BoxTTT value={value} onClick={()=> value === null &&  onClick(idx)}/>
       })}
        </div> 
  )
}

export default Board