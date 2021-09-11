import React from "react"
import Src from "../../images/topview.svg"
import * as styles from "./Main.module.scss"

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <img src={Src} alt="Mochily" className={styles.topview}/>
    </div>
  )
}

export default Main