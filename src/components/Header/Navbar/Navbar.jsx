import React, { useState } from "react"
import * as styles from "./Navbar.module.scss"
import { Link } from "gatsby"

import NavbarLinks from "./NavbarLinks"
import Hamburger from "./Hamburger"

const Navbar = () => {
  // navmenuのdisplayをstateで保持
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className={styles.navigation}>
      <Link to="/" className={styles.link}>
        Mochily
      </Link>
      <div className={styles.toggle} onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen ? <Hamburger isOpen /> : <Hamburger />}
      </div>
      {navbarOpen ? <NavbarLinks isOpen /> : <NavbarLinks />}
    </nav>
  )
}

export default Navbar
