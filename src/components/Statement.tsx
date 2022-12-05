import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode"

const Container = styled.section`
  display: flex;
  height: 100%;
  position: relative;
`
const Title = styled.h4`
  text-align: center;
  color: ${props => props.theme.primaryColor};
  font-weight: 200;
  margin: 0;
  font-size: 1.25rem;
  line-height: 2.5rem;
  text-transform: none;
`

const TitleWrapper = styled.div`
  margin: 0 auto;
  padding: 8.75rem 0;
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.overlayColor};
  opacity: 0.65;
  z-index: -1;
`

const Card = styled.div`
  background: ${props => props.theme.backgroundColor};
  padding: 2.5rem;
`

const Statement = () => {
  const { isDark } = useStyledDarkMode()
  return (
    <Container>
      {isDark ? (
        <StaticImage
          alt=""
          src="../images/tiles.jpg"
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
          src="../images/tiles.jpg"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "-1",
          }}
        />
      )}
      <Overlay />
      <TitleWrapper>
        <Card>
          <Title>
            I’ve spent +10 years delighting customers by providing them value,
            while doing what I love:
          </Title>
          <Title>
            First as a Content and Product Manager, then as a Software Engineer
            and now as an Engineering Manager.
          </Title>
        </Card>
      </TitleWrapper>
    </Container>
  )
}

export default Statement
