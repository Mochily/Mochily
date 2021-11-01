import React from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

const AppImg = ({ data }) => {
  const image = getImage(data.imageSharp)
  return (
    <section>
      <GatsbyImage image={image} alt={data.imageSharp} />
    </section>
  )
}

export default AppImg

export const imgQuery = graphql`
  query MyQuery {
    imageSharp {
      gatsbyImageData(
        width: 200
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
`
