import * as React from "react"
import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode"
import { SwitcherWrapper, SwitcherKnob } from "./Switcher"

const DarkModeStyles = css`
  background: ${props => props.theme.darkModeSwitcher.backgroundColor};
  border: 1px solid ${props => props.theme.darkModeSwitcher.knobColor};
`

const DarkModeKnobStyles = css`
  border: 1px solid ${props => props.theme.darkModeSwitcher.backgroundColor};
  background: ${props => props.theme.darkModeSwitcher.knobColor};
`

const MoonIconWrapper = styled.span`
  position: absolute;
  color: ${props => props.theme.darkModeSwitcher.iconColor};
  left: 8px;
  top: 5px;
`

const SunIconWrapper = styled.span`
  position: absolute;
  color: ${props => props.theme.darkModeSwitcher.iconColor};
  right: 8px;
  top: 5px;
`

const DarkModeToggleSwitch = styled(SwitcherWrapper)`
  ${DarkModeStyles};
`

const DarkModeToggleButtonSwitch = styled(SwitcherKnob)`
  ${DarkModeKnobStyles};
`

type DarkModeSwitcherProps = {
  isOn?: boolean
}

const DarkModeSwitcher = () => {
  const { isDark, toggleDark } = useStyledDarkMode()
  return (
    <DarkModeToggleSwitch
      role="switch"
      aria-checked={isDark}
      onClick={() => toggleDark(!isDark)}
      isOn={isDark}
      aria-label="dark mode switcher"
    >
      <DarkModeToggleButtonSwitch isOn={isDark} />
      <SunIconWrapper>
        <FontAwesomeIcon icon={faSun} />
      </SunIconWrapper>
      <MoonIconWrapper>
        <FontAwesomeIcon icon={faMoon} />
      </MoonIconWrapper>
    </DarkModeToggleSwitch>
  )
}

export default DarkModeSwitcher
