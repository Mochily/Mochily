import React from "react"
import { Link } from "gatsby"
import * as styles from "./Header.module.scss"

import Navbar from "../Header/Navbar/Navbar"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.heading}>
        <Link to="/" className={styles.link}>
          Mochily
        </Link>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
