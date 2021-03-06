import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query allContentfulBlogPost {
      allContentfulBlog {
        nodes {
          id
          title

          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `);

  return (
  <Layout>
    <SEO title="Home" />

    {data.allContentfulBlog.nodes.map(({ id, title, body }) => (
        <div>
          <h3 key={id}>
            {title}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html}}>
            {}
          </div>
        </div>
    ))}

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)};

export default IndexPage
