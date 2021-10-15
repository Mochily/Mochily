import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import useSiteMetadata from "../hooks/useSiteMetadata"

import FirstApp from "../components/App/FirstApp"
import Products from "../components/App/Products"
import Main from "../components/Main/Main"
import Container from "../components/Container/Container"
import AppImg from "../components/App/AppImg"

const Index = ({ data, location }) => {
  const { title } = useSiteMetadata

  return (
    <Layout location={location} title={title}>
      <Main />
      <Container>
        <Products />
        <FirstApp flug={true} />
        <FirstApp flug={false} />
      </Container>
    </Layout>
  )
}

export default Index

/*
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

*/
