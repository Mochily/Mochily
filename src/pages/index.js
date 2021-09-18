import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import useSiteMetadata from "../hooks/useSiteMetadata"


import App from "../components/App/App"

import AppOdd from "../components/App/AppOdd"
import Products from "../components/App/Products"
import Main from "../components/Main/Main"
import Container from "../components/Container/Container"
import Fluid from "../components/Animation/Fluid"
import { StaticImage } from "gatsby-plugin-image"

const Index = ({ data, location }) => {
  const { title } = useSiteMetadata
  const filename = '../../images/icon.png'
  
  return (
    <Layout location={location} title={title}>
      <Main />
      <Container>
        <Products />

        <App
          flug={true}
          iconImg ="../../images/icon.png"
          appName="にゃんころ１"
          catchCopy="ぽんぽこぽんぽこですよ"
          description="テキストだお"
        />
        <App
          flug={false}
          appName="にゃんころ２"
          catchCopy="ぽんぽこぽんぽこですよ"
          description="テキストだお"
        />
        <App
          flug={true}
          appName="にゃんころ３"
          catchCopy="ぽんぽこぽんぽこですよ"
          description="テキストだお"
        />
        <App
          flug={false}
          appName="にゃんころ４"
          catchCopy="ぽんぽこぽんぽこですよ"
          description="テキストだお"
        />
        <AppOdd
          iconImg={filename}
          appName="にゃんころてすと"
          catchCopy="ぽんぽこぽんぽこですよ"
          description="テキストだお"
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
