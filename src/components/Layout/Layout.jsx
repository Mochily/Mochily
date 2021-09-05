import React from "react"
import HeaderBar from "../Header/HeaderBar.jsx"
import AppO from "../App/AppOdd.jsx"
import AppE from "../App/AppEven.jsx"
import SEO from "../SEO/SEO.jsx"

const Layout = ({ location, title, children }) => {
  return (
    <div className="global-wrapper">
      <HeaderBar />
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
    </div>
  )
}
//<SEO siteTitle={title} />
export default Layout;