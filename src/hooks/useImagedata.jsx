// import { useStaticQuery, graphql } from "gatsby"

// const useImagedata = () => {
//   const { allFile } = useStaticQuery(appImageDataQuery)
//   return allFile.edges.node
// }

// const appImageDataQuery = graphql`
//   query ImageQuery {
//     allFile(filter: {sourceInstanceName: {eq: "images"}}) {
//       edges {
//         node {
//           name
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `

// export default useImagedata