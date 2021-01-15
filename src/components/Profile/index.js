import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Profile = () => {
  return (
    <StaticQuery
      query={graphql`
        query MySiteMetadata {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { title, description },
        },
      }) => (
        <div className="Profile-wrapper">
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
      )}
    />
  )
}

export default Profile
