import React from "react"
import { Header } from "../Header/Header"
import SEO from "../SEO/SEO"

const Layout = ({ location, title, children }) => {
  return (
    <div className="global-wrapper">
      <Header />
      <SEO title={title} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
