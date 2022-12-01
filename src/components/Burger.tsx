import React, { useState } from "react"
import styled from "styled-components"
import { device } from "../styles/device"

const BurgerContainer = styled.button`
  cursor: pointer;
  background: none;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media ${device.extraSmall} {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`

const BurgerLine = styled.div`
  width: 2rem;
  height: 0.25rem;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  &:nth-child(1) {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "rotate(45deg)" : "rotate(0)"};
  }
  &:nth-child(2) {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "translateX(100%)" : "translateX(0)"};
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "rotate(-45deg)" : "rotate(0)"};
  }
`

const Burger = () => {
  const [isMenuOpen, openMenu] = useState(false)

  return (
    <>
      <BurgerContainer
        isMenuOpen={isMenuOpen}
        onClick={() => openMenu(!isMenuOpen)}
      >
        <BurgerLine isMenuOpen={isMenuOpen} />
        <BurgerLine isMenuOpen={isMenuOpen} />
        <BurgerLine isMenuOpen={isMenuOpen} />
      </BurgerContainer>
    </>
  )
}

export default Burger
