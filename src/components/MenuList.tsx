import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { device } from "../styles/device"

const NavList = styled.ul<MenuListProps>`
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
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
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: ${props => props.theme.primaryColor};
    }
  }
`

type MenuListProps = {
  isMenuOpen: boolean
}

const MenuList = ({ isMenuOpen }: MenuListProps) => {
  return (
    <NavList isMenuOpen={isMenuOpen}>
      <li>
        <AnchorLink to="/#story">story</AnchorLink>
      </li>
      <li>
        <AnchorLink to="/#work">work</AnchorLink>
      </li>
      <li>
        <AnchorLink to="/#values">values</AnchorLink>
      </li>
      <li>
        <AnchorLink to="/#hobbies">hobbies</AnchorLink>
      </li>
    </NavList>
  )
}

export default MenuList
