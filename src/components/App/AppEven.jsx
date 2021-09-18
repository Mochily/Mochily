import React from "react"
import Src from "../../images/icon.png"
import Src2 from "../../images/mock.png"
import Button from "../Button/Button.jsx"
import * as styles from "./AppEven.module.scss"

//偶数個目のアプリを表示する
const AppEven = ({ iconImg, appName, catchCopy, description, mockImg }) => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.center}>
        <section className={styles.flex}>
          <div className={styles.left}>
            <img src={Src2} alt="img" className={styles.mock} />
          </div>
          <div className={styles.right}>
            <img src={Src} alt="img" className={styles.icon} />
            <p>
              <span className={styles.catchCopy}>{catchCopy}</span>
            </p>
            <h1 className={styles.appName}>{appName}</h1>
            <p className={styles.description}>{description}</p>
            <Button url="/" />
          </div>
        </section>
      </main>
    </div>
  )
}

export default AppEven
