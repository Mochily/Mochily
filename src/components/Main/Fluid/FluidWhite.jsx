import React from "react"
import * as styles from "./FluidWhite.module.scss"

//トップページ以外に表示される文字流体シェイプ
const FluidWhite = () => {
  return (
    <div>
      <div className={styles.fluidwhite}>
        <p className={styles.m}>M</p>
        <p className={styles.i}>i</p>
        <p className={styles.o}>o</p>
        <p className={styles.c}>c</p>
        <p className={styles.y}>y</p>
        <p className={styles.h}>h</p>
        <p className={styles.l}>l</p>
      </div>
    </div>
  )
}

export default FluidWhite
