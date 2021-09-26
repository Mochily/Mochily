import React from "react"

import Button from "../Button/Button.jsx"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./App.module.scss"

const FirstApp = ({ flug }) => {
  const isOdd = flug
  const catchCopy = "かんたん時間割アプリ"
  const description = "簡単に登録できるシンプルな時間割アプリです。"
  const appName = "Timetable(仮)"

  // const appInfo = [
  //   {
  //     appName: "Timetable(仮)",
  //     catchCopy: "かんたん時間割アプリ",
  //     description: "簡単に登録できるシンプルな時間割アプリです。",
  //     icon: {
  //       src: "../../images/icon.png",
  //       alt: "icon",
  //     },
  //     image: {
  //       src: "../../images/mock.png",
  //       alt: "timetable-mock-img"
  //     }
  //   },
  //   {
  //     appName: "Timetable2(仮)",
  //     catchCopy: "かんたん時間割アプリ",
  //     description: "簡単に登録できるシンプルな時間割アプリです。",
  //     icon: {
  //       src: "../../images/icon.png",
  //       alt: "icon",
  //     },
  //     image: {
  //       src: "../../images/mock-1.png",
  //       alt: "timetable-mock-img"
  //     }
  //   }
  // ]

  if (isOdd) {
    return (
      <section className={styles.flex}>
        <div className={styles.left}>
          <StaticImage
            src="../../images/icon.png"
            alt="icon"
            className={styles.icon}
          />
          <p>
            <span className={styles.catchCopy}>{catchCopy}</span>
          </p>
          <h2 className={styles.appName}>{appName}</h2>
          <p className={styles.description}>{description}</p>
          <Button url="/about/" />
        </div>
        <div className={styles.right}>
          <StaticImage
            src="../../images/mock-1.png"
            alt="timetable-mock-img"
            className={styles.mock}
          />
        </div>
      </section>
    )
  } else {
    return (
      <section className={styles.flexEven}>
        <div className={styles.leftEven}>
          <StaticImage
            src="../../images/icon.png"
            alt="icon"
            className={styles.icon}
          />
          <p>
            <span className={styles.catchCopy}>{catchCopy}</span>
          </p>
          <h2 className={styles.appName}>{appName}</h2>
          <p className={styles.description}>{description}</p>
          <Button url="/" />
        </div>
        <div className={styles.right}>
          <StaticImage
            src="../../images/mock-1.png"
            alt="timetable-mock-img"
            className={styles.mock}
          />
        </div>
      </section>
    )
  }
}

export default FirstApp
