import React from "react"
import Layout from "../components/Layout/Layout"
import useSiteMetadata from "../hooks/useSiteMetadata"

import SubMain from "../components/Main/SubMain"

const ProductsPage = ({ data, location }) => {
  const { title } = useSiteMetadata
  return (
    <div>
      <Layout location={location} title={title}>
        <SubMain text="Products" subtext="これまでの制作物" />
      </Layout>
    </div>
  )
}

export default ProductsPage
