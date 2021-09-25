import React from "react"
import Layout from "../components/Layout/Layout"
import useSiteMetadata from "../hooks/useSiteMetadata"

import SubMain from "../components/Main/SubMain"

const ContactPage = ({ data, location }) => {
  const { title } = useSiteMetadata
  return (
    <div>
      <Layout location={location} title={title}>
          <SubMain text="Contact" subtext="お問い合わせ"/>
      </Layout>
    </div>
  )
}

export default ContactPage