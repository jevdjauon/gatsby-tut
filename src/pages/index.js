import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Main from "../layouts/Main"

const IndexPage = ({ data }) => {
  const meta = data.site.siteMetadata

  return (
    <Main>
      <Header />
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>
      <p>{meta.author}</p>
    </Main>
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
