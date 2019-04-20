import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Main from "../layouts/Main"

const IndexPage = ({ data }) => {
  const meta = data.site.siteMetadata

  return (
    <Main>
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>
      <p>{meta.author}</p>
      <div style={{ height: "600px" }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          ullam inventore placeat debitis illum quaerat culpa suscipit vero,
          aspernatur ea reprehenderit minus tempora. Delectus aperiam earum
          quaerat, provident beatae aliquid!
        </p>
      </div>
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
