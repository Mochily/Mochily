import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const { site } = useStaticQuery(siteMetadataQuery)
  return site.siteMetadata
}


// とりあえず必要そうなサイトデータだけ取る
const siteMetadataQuery =
    graphql`
      query SiteMetaDataQuery {
        site {
          siteMetadata {
            title
            siteUrl
            author {
              name
              summary
            }
            social {
              twitter
              github
              instagram
            }
            headerMenu {
              name
              slug
            }
            footerMenu {
              name
              slug
            }
          }
        }
      }
    `

export default useSiteMetadata