import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"
import * as Style from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <Style.ProfileWrapper>
      <Style.ProfileLink>
        <Avatar />
        <Style.ProfileAuthor>
          {title}
          <Style.ProfilePosition>{position}</Style.ProfilePosition>
        </Style.ProfileAuthor>
      </Style.ProfileLink>
      <Style.ProfileDescription>{description}</Style.ProfileDescription>
    </Style.ProfileWrapper>
  )
}

export default Profile
