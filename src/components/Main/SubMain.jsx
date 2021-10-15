import React from "react"

import * as styles from "./SubMain.module.scss"
import FluidWhite from "./Fluid/FluidWhite"
import Heading from "./Fluid/Heading"
import Container from "../Container/Container"

//トップページ以外のMainビュー
//text subtextに見出し、小見出しを入れることで、ページに合わせたレイアウトに
const SubMain = ({ text, subtext }) => {
  return (
    <div className={styles.hidden}>
        <Heading text={text} subtext={subtext} />
        <FluidWhite />
    </div>
  )
}
//<img src={Src} alt="Mochily" className={styles.topview} />
export default SubMain
