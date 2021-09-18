import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { graphql } from "gatsby";
import Src2 from "../../images/mock.png"
import Button from "../Button/Button.jsx"
import * as styles from "./AppListOdd.module.scss"




//奇数個目のアプリを表示する
const AppOdd = ({ iconImg, appName, catchCopy, description, mockImg }) => {
  console.log(iconImg);
  return (
    <div className={styles.wrapper}>
      <main className={styles.center}>
        <section className={styles.flex}>
          <div className={styles.left}>

            <p>
              <span className={styles.catchCopy}>{catchCopy}</span>
            </p>
            <h1 className={styles.appName}>{appName}</h1>
            <p className={styles.description}>{description}</p>
            <Button url="/" />
          </div>
          <div className={styles.right}>
            <img src={Src2} alt="img" className={styles.mock} />
          </div>
        </section>
      </main>
    </div>
  )
}

export default AppOdd

/*            <StaticImage
src={iconImg}
alt="aaa"
className={styles.icon}
/>*/
