import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const meta = data.site.siteMetadata

  return (
    <>
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>
      <p>{meta.author}</p>
    </>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default IndexPage
