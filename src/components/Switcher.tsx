import React, { useState } from "react"
import styled from "styled-components"

export const SwitcherWrapper = styled.button`
  background: ${props => props.theme.switcher.backgroundColor};
  border: 0.063rem solid ${props => props.theme.switcher.knobColor};
  height: 1.75rem;
  width: 3.5rem;
  border-radius: 1rem;
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
  width: 1.5rem;
  height: 1.5rem;
  background: ${props => props.theme.switcher.knobColor};
  border: 0.063rem solid ${props => props.theme.switcher.backgroundColor};
  border-radius: 50%;
  left: ${props => (props.isOn ? "1.75rem" : "0")};
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
