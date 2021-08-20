import React from "react"
import { Link } from "gatsby"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import * as styles from "./Header.module.scss"

const HeaderBar = props => {
  const { headerMenu } = useSiteMetadata()

  const linkstyles = {
    color: "black",
    fontWeight: "normal",
  }

  // 使う？？
  const activestyles = {}

  const menu = headerMenu.map(item => {
    const page_link = item.slug
    return (
      <li className={styles.li} key={page_link}>
        <Link to={page_link} style={linkstyles}>
          {item.name}
        </Link>
      </li>
    )
  })

  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        <Link to="/">Mochily</Link>
      </h1>
      <nav>
        <ul>{menu}</ul>
      </nav>
    </header>
  )
}

export default HeaderBar
