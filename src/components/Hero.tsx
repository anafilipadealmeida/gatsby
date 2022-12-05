import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { device } from "../styles/device"

const LeftSide = styled.div`
  width: 50%;

  @media ${device.extraSmall} {
    width: 100%;
  }
`

const RightSide = styled.div`
  width: 50%;
  position: relative;
  height: 100%;

  @media ${device.extraSmall} {
    width: 100%;
    position: absolute;
    height: 100vh;
    top: 0;
    right: 0;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  color: ${props => props.theme.accentColor};

  @media ${device.extraSmall} {
    font-size: 4rem;
  }
`

const Description = styled.h3`
  text-transform: lowercase;
  font-weight: 300;
  font-size: 1.5rem;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  @media ${device.extraSmall} {
    width: 100%;
    display: block;
  }
`

const HelloText = styled.p`
  text-transform: uppercase;
  font-size: 5.5rem;
  padding-bottom: 2rem;

  @media ${device.extraSmall} {
    font-size: 4rem;
  }
`

const TextContainer = styled.div`
  padding: 25px;

  @media ${device.extraSmall} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
`

const SocialIconsWrapper = styled.div`
  > * {
    margin-left: 0.75rem;
    &:first-child {
      margin-left: 0;
    }
  }
`

const SocialIcon = styled.a`
  font-size: 2rem;
  > * {
    color: ${props => props.theme.primaryColor};
    &:hover {
      color: ${props => props.theme.accentColor};
    }
  }
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.overlayColor};
  opacity: 0.6;
  z-index: -1;

  @media ${device.extraSmall} {
    opacity: 0.8;
  }
`

const Hero = () => {
  const { isDark } = useStyledDarkMode()
  return (
    <Wrapper>
      <LeftSide id="Hero">
        <TextContainer>
          <HelloText>Hey, I am</HelloText>
          <Title>Ana Filipa de Almeida</Title>
          <Description>empowering engineering teams</Description>
          <SocialIconsWrapper>
            <SocialIcon
              href="https://www.linkedin.com/in/anafilipadealmeida/"
              aria-label="My Linkedin account"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialIcon>
            <SocialIcon
              href="https://github.com/anafilipadealmeida"
              aria-label="My Github account"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </SocialIcon>
          </SocialIconsWrapper>
        </TextContainer>
      </LeftSide>
      <RightSide>
        {isDark ? (
          <StaticImage
            alt=""
            src="../images/ana_portrait.jpg"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: "-1",
            }}
            transformOptions={{
              grayscale: true,
            }}
          />
        ) : (
          <StaticImage
            alt=""
            src="../images/ana_portrait.jpg"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: "-1",
            }}
          />
        )}
        <Overlay />
      </RightSide>
    </Wrapper>
  )
}

export default Hero
