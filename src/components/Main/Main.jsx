import React from "react"
import * as styles from "./Main.module.scss"
import Fluid from "./Fluid/Fluid"
import FluidImg from "./Fluid/FluidImg"
import Logo from "./Fluid/Logo"

//トップページのMainビュー
const Main = () => {
  return (
    <div>
      <Logo />
      <div className={styles.flex}>
        <Fluid />
        <FluidImg />
      </div>
    </div>
  )
}

export default Main
