import React from "react"

import FluidMin from "./FluidMin"
import * as styles from "./Heading.module.scss"

//トップページ以外の見出しコンポーネント
//text=見出し subtext=小見出し
const Heading = ({ text, subtext }) => {
  return (
    <div className={styles.head}>
      <p className={styles.heading}>{text}</p>
      <p className={styles.subheading}>{subtext}</p>
      <FluidMin />
    </div>
  )
}

export default Heading
