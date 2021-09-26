import React from "react"
import { Link } from "gatsby"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import * as styles from "./Header.module.scss"

import Navbar from "../Header/Navbar/Navbar"

const Header = () => {
  return (
    <header>
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
