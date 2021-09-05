import React from "react"
import * as styles from "./Button.module.scss"

const Button = url => {
  return (
    <a to={url} className={`${styles.btn} ${styles.btnflat}`}>
      <span>詳しく見る</span>
    </a>
  )
}

export default Button
