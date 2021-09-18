import React from "react"
import Src from "../../images/topview1.svg"
import * as styles from "./Main.module.scss"
import Fluid from "../../components/Animation/Fluid"
import FluidImg from "../../components/Animation/FluidImg"
import Logo from "../../components/Animation/Logo"
import { StaticImage } from "gatsby-plugin-image"

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
//<img src={Src} alt="Mochily" className={styles.topview} />
export default Main
