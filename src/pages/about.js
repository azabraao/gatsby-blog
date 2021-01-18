import React, { memo } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />

      <h1>About page</h1>
      <ul>
        <li>
          <Link to="/about" activeStyle={{ color: "red" }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/" activeStyle={{ color: "red" }}>
            Home
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default memo(AboutPage)
