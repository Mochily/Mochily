import React from "react"
import HeaderBar from "../Header/HeaderBar.jsx"
import SEO from "../SEO/SEO.jsx"

const Layout = ({ location, title, children }) => {
  return (
    <div className="global-wrapper">
      <HeaderBar />
      <SEO title={title} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
