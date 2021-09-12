import React from "react"
import * as styles from "./Products.module.scss"

//アプリを表示するところのタイトル表示
const Products = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Products</h1>
      <p className={styles.subtitle}>これまでの制作物</p>
    </div>
  )
}

export default Products
