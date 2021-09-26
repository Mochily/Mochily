import React from "react"

import * as styles from "./SubMain.module.scss"
import FluidWhite from "./Fluid/FluidWhite"
import Heading from "./Fluid/Heading"

//トップページ以外のMainビュー
//text subtextに見出し、小見出しを入れることで、ページに合わせたレイアウトに
const SubMain = ({ text, subtext }) => {
  return (
    <div className={styles.hidden}>
      <div className={styles.flex}>
        <Heading text={text} subtext={subtext} />
        <FluidWhite />
      </div>
    </div>
  )
}
//<img src={Src} alt="Mochily" className={styles.topview} />
export default SubMain
