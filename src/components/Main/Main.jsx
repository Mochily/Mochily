import React from "react"
import * as styles from "./Main.module.scss"
import Fluid from "../../components/Animation/Fluid"
import FluidImg from "../../components/Animation/FluidImg"
import Logo from "../../components/Animation/Logo"

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
