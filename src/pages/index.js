import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import useSiteMetadata from "../hooks/useSiteMetadata"

import AppO from "../components/App/AppOdd"
import AppE from "../components/App/AppEven"
import Container from "../components/Container/Container"

const Index = ({ data, location }) => {
  const { title } = useSiteMetadata
  return (
    <Layout location={location} title={title}>
      <Container>
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
