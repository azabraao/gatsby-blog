import React, { memo } from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <>
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
    </>
  )
}

export default memo(AboutPage)
