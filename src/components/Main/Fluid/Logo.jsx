import React from "react"
import * as styles from "./Logo.module.scss"
import { StaticImage } from "gatsby-plugin-image"

//トップページの反転ロゴコンポーネント
const Logo = () => {
  return (
    <div>
      <p className={styles.logo}>Mochily</p>
    </div>
  )
}

export default Logo
