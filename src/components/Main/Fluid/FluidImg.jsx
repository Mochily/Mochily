import React from "react"
import * as styles from "./FluidImg.module.scss"
import { StaticImage } from "gatsby-plugin-image"


//トップページの画像流体シェイプのコンポーネント
const FluidImg = () =>{
  return (
    <div>
      <StaticImage
      src="../../../images/pc.jpg"
      alt="Mochily"
      className={styles.fluidpic}
      />
    </div>
  )
}

export default FluidImg

