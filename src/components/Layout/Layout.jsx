import React from "react"
import SEO from "../SEO/SEO"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import * as styles from "./Layout.module.scss"

const Layout = ({ location, title, children }) => {
  return (
    <div className="global-wrapper">
      <Header />
      <SEO title={title} />
      <main className={styles.wrapper}>{children}</main>
      <Footer />
    </div>
  )
}
export default Layout
