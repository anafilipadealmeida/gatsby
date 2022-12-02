import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import NavBar from "./Navbar"
import Burger from "./Burger"

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
`

const SiteTitle = styled.h2`
  padding-left: 1rem;
  margin: 0;
`

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

type HeaderProps = {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => (
  <HeaderWrapper>
    <Nav>
      <SiteTitle>
        <Link to="/">{siteTitle}</Link>
      </SiteTitle>
      <Burger />
    </Nav>
  </HeaderWrapper>
)

export default Header
