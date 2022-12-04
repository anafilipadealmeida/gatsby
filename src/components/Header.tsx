import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Burger from "./Burger"

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  background: ${props => props.theme.backgroundColor};
  width: 100%;
  z-index: 10;
`

const SiteTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 25px;
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
