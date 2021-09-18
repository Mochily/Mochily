import React from "react"
import * as styles from "./FluidImg.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const FluidImg = () =>{
  return (
    <div>
      <StaticImage
      src="../../images/pc.jpg"
      alt="Mochily"
      className={styles.fluidpic}
      />
    </div>
  )
}

export default FluidImg

