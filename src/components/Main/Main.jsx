import React from "react"
import * as styles from "./Main.module.scss"
import Fluid from "./Fluid/Fluid"
import FluidImg from "./Fluid/FluidImg"
import FluidWhite from "../Main/Fluid/FluidWhite"
import Logo from "./Fluid/Logo"

//トップページのMainビュー
const Main = () => {
  return (
    <div>
      <Fluid />
      <FluidImg />
      <Logo />
    </div>
  )
}

export default Main
