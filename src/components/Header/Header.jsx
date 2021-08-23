import React from "react"
import { Link } from "gatsby"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import * as styles from "./Header.module.scss"

export const Header = props => {
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
      <div className={styles.heading}>
        <Link to="/" className={styles.link}>
          Mochily
        </Link>
      </div>
      <nav>
        <ul className={styles.ul}>{menu}</ul>
      </nav>
    </header>
  )
}
