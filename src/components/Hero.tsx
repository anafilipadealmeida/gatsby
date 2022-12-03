import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const LeftSide = styled.div`
  width: 50%;
`

const RightSide = styled.div`
  width: 50%;
  position: relative;
  height: 100%;
`

const Title = styled.h1`
  text-transform: uppercase;
  color: ${props => props.theme.accentColor};
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
`

const HelloText = styled.p`
  text-transform: uppercase;
  font-size: 5.5rem;
  padding-bottom: 2rem;
`

const TextContainer = styled.div`
  padding: 6rem;
`

const SocialIconsWrapper = styled.div`
  padding: 0 6rem;
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
  background: ${props => props.theme.backgroundColor};
  opacity: 0.3;
  z-index: -1;
`

const Hero = () => (
  <Wrapper>
    <LeftSide id="Hero">
      <TextContainer>
        <HelloText>Hey, I am</HelloText>
        <Title>Ana Filipa de Almeida</Title>
        <Description>empowering engineering teams</Description>
      </TextContainer>
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
    </LeftSide>
    <RightSide>
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
      <Overlay />
    </RightSide>
  </Wrapper>
)

export default Hero
