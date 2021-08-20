import React from "react"
import Layout from "../components/Layout/Layout"
import useSiteMetadata from "../hooks/useSiteMetadata"

const NotFoundPage = ({ data, location }) => {
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout location={location} title="404: Not Found">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
