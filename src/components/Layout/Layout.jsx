import React from "react"
import SEO from "../SEO/SEO"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ location, title, children }) => {
  return (
    <div className="global-wrapper">
      <Header />
      <SEO title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
