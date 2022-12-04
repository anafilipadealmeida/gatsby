import React, { useState } from "react"
import styled from "styled-components"

export const SwitcherWrapper = styled.button`
  background: ${props => props.theme.switcher.backgroundColor};
  border: 1px solid ${props => props.theme.switcher.knobColor};
  height: 28px;
  width: 56px;
  border-radius: 16px;
  position: relative;
  cursor: pointer;
  &:hover {
    > * {
      &:first-child {
        background-color: ${props => props.theme.switcher.backgroundHoverColor};
      }
    }
  }
`
export const SwitcherKnob = styled.span<SwitcherKnobProps>`
  position: absolute;
  width: 24px;
  height: 24px;
  background: ${props => props.theme.switcher.knobColor};
  border: 1 solid ${props => props.theme.switcher.backgroundColor};
  border-radius: 50%;
  left: ${props => (props.isOn ? "28px" : "0")};
  transition: left 0.3s ease-out;
  top: 0;
  z-index: 1;
`

type SwitcherKnobProps = {
  isOn?: boolean
}

const Switcher = () => {
  const [isToggleOn, changeToggle] = useState(false)
  return (
    <SwitcherWrapper
      role="switch"
      aria-checked={isToggleOn}
      onClick={() => changeToggle(!isToggleOn)}
    >
      <SwitcherKnob isOn={isToggleOn} />
    </SwitcherWrapper>
  )
}

export default Switcher
