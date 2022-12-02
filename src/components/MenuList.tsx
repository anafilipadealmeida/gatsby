import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "../styles/device"

const NavList = styled.ul`
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

const MenuList = ({ isMenuOpen }) => {
  return (
    <NavList isMenuOpen={isMenuOpen}>
      <li>
        <Link
          to="/story"
          style={{
            textDecoration: `none`,
          }}
          activeStyle={{ textDecoration: "underline" }}
        >
          story
        </Link>
      </li>
      <li>
        <Link
          to="/work"
          style={{
            textDecoration: `none`,
          }}
        >
          work
        </Link>
      </li>
      <li>
        <Link
          to="/values"
          style={{
            textDecoration: `none`,
          }}
        >
          values
        </Link>
      </li>
    </NavList>
  )
}

export default MenuList
