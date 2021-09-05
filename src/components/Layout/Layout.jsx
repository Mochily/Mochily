import React from "react"
import HeaderBar from "../Header/HeaderBar.jsx"
import AppO from "../App/AppOdd.jsx"
import AppE from "../App/AppEven.jsx"
import SEO from "../SEO/SEO"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ location, title, children }) => {
  return (
    <div className="global-wrapper">
      <Header />
      <SEO title={title} />
      <AppO
        appName="App"
        catchCopy="にゃんにゃんす"
        description="こんちゃすです"
      />
      <AppE />
      <AppO 
        appName="App"
        catchCopy="にゃんにゃんにゃんす"
        description="ニャンころ餅ですどうもです"
      />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
//<SEO siteTitle={title} />
export default Layout;