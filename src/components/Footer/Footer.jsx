import React from "react"
import { Link } from "gatsby"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import * as styles from "./Footer.module.scss"

const Footer = props => {
  const { footerMenu } = useSiteMetadata()

  const menu = footerMenu.map(item => {
    const page_link = item.slug
    return (
      <li className={styles.li} key={page_link}>
        <Link to={page_link}>{item.name}</Link>
      </li>
    )
  })

  return (
    <footer className={styles.footer}>
      <small className={styles.copy}>&copy; Mochily</small>
      <nav className={styles.nav}>
        <ul className={styles.ul}>{menu}</ul>
      </nav>
    </footer>
  )
}

export default Footer