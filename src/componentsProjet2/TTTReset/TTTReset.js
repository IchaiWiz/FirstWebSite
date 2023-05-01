import React from 'react'
import styles from "./TTTReset.module.css"

const TTTReset = ({resetBoard}) => {
  return (
    <button className={styles.reset} onClick={resetBoard}>Reset</button>
  )
}

export default TTTReset