import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import NavBar from "./Navbar"

const HeaderWrapper = styled.header`
  padding: 1rem 0;
  display: flex;
  align-items: center;
`

const SiteTitle = styled.h1`
  padding-left: 1rem;
  a {
    text-decoration: none;
    display: flex;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${props => props.theme.primaryColor};
  }
`

type HeaderProps = {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => (
  <HeaderWrapper>
    <NavBar />
    <SiteTitle>
      <Link to="/">{siteTitle}</Link>
    </SiteTitle>
  </HeaderWrapper>
)

export default Header
