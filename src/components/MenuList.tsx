import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { device } from "../styles/device"

const NavList = styled.ul<MenuListProps>`
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  li {
    padding: 18px 10px;
    font-size: 16px;
  }
  @media ${device.extraSmall} {
    flex-flow: column nowrap;
    background-color: ${props => props.theme.accentColor};
    position: fixed;
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li a {
      color: ${props => props.theme.menuSmallScreenTextColor};
    }
  }
`

type MenuListProps = {
  isMenuOpen: boolean
  openMenu: (sMenuOpen: boolean) => void
}

const MenuList = ({ isMenuOpen, openMenu }: MenuListProps) => {
  return (
    <NavList isMenuOpen={isMenuOpen}>
      <li>
        <AnchorLink
          to="/#story"
          onAnchorLinkClick={() => openMenu(!isMenuOpen)}
        >
          story
        </AnchorLink>
      </li>
      <li>
        <AnchorLink to="/#work" onAnchorLinkClick={() => openMenu(!isMenuOpen)}>
          work
        </AnchorLink>
      </li>
      <li>
        <AnchorLink
          to="/#values"
          onAnchorLinkClick={() => openMenu(!isMenuOpen)}
        >
          values
        </AnchorLink>
      </li>
      <li>
        <AnchorLink
          to="/#hobbies"
          onAnchorLinkClick={() => openMenu(!isMenuOpen)}
        >
          hobbies
        </AnchorLink>
      </li>
    </NavList>
  )
}

export default MenuList
