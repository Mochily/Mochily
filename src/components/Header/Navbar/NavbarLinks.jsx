import React from "react"
import * as styles from "./NavbarLinks.module.scss"
import useSiteMetadata from "../../../hooks/useSiteMetadata"
import { Link } from "gatsby"

const NavbarLinks = ({ isOpen }) => {
  const { headerMenu } = useSiteMetadata()

  const links = headerMenu.map((item, index) => {
    const link = item.slug
    return (
      <Link to={link} key={index} className={styles.navitem}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </Link>
    )
  })

  if (isOpen) {
    return <div className={styles.navbox}>{links}</div>
  } else {
    return <div className={`${styles.navbox} ${styles.close}`}>{links}</div>
  }
}

export default NavbarLinks
