import React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"
import GlobalStyles from "../../styles/global"
import * as Style from "./styled"

const Layout = ({ children }) => {
  return (
    <Style.LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <Style.LayoutMain>{children}</Style.LayoutMain>
    </Style.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
