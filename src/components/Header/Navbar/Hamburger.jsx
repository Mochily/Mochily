import React from "react"
import * as styles from "./Hamburger.module.scss"

const Hamburger = ({ isOpen }) => {
  // ×マーク
  if (isOpen) {
    return (
      <div className={`${styles.openbtn} ${styles.active}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  } else {
    // 三マーク
    return (
      <div className={styles.openbtn}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
}

export default Hamburger
