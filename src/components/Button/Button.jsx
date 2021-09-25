import React from "react"
import { Link } from "gatsby"
import * as styles from "./Button.module.scss"

//黒→オレンジへのコンポーネント
const Button = url => {
  return (
    <Link to={url.url} className={`${styles.btn} ${styles.btnflat}`}>
      <span>詳しく見る</span>
    </Link>
  )
}

export default Button
