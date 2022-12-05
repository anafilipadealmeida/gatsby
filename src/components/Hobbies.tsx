import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode"
import { device } from "../styles/device"

const Section = styled.section`
  height: 100%;
  position: relative;
`

const Container = styled.div`
  max-width: 1400px;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 3.75rem 0;
`

const LeftSide = styled.div`
  width: 40%;
  padding: 6.25rem 20px 0;
  z-index: 3;

  @media ${device.extraSmall} {
    width: 60%;
    text-align: center;
    margin: 0 auto;
    padding: 0;
  }

  @media ${device.small} {
    width: 60%;
    text-align: center;
    margin: 0 auto;
    padding: 0;
  }

  @media ${device.medium} {
    width: 60%;
    text-align: center;
    margin: 0 auto;
    padding: 0;
  }
`

const RightSide = styled.div`
  width: 60%;

  @media ${device.extraSmall} {
    display: none;
  }

  @media ${device.small} {
    display: none;
  }

  @media ${device.medium} {
    display: none;
  }
`

const Row = styled.div`
  text-align: right;
`

const ImageWrapper = styled.div`
  max-width: 200px;
  padding: 14px;
  display: inline-block;
`
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.overlayColor};
  opacity: 0.65;
  z-index: 1;
`

const Text = styled.h2`
  color: ${props => props.theme.sectionTitleColor};
  z-index: 3;
`

const Hobbies = () => {
  const { isDark } = useStyledDarkMode()
  return (
    <Section id="hobbies">
      <Overlay />
      <Container>
        <LeftSide>
          <Text>
            Out of the office you'll find me taking photos, reading, traveling,
            petting my cat Wiki, doing pilates or baking.
          </Text>
        </LeftSide>
        <RightSide>
          <Row>
            <ImageWrapper>
              <StaticImage
                alt=""
                src="../images/flamingo.png"
                transformOptions={{
                  grayscale: true,
                }}
              />
            </ImageWrapper>
            <ImageWrapper>
              <StaticImage
                alt=""
                src="../images/books.png"
                transformOptions={{
                  grayscale: true,
                }}
              />
            </ImageWrapper>
            <ImageWrapper>
              <StaticImage
                alt=""
                src="../images/travel.png"
                transformOptions={{
                  grayscale: true,
                }}
              />
            </ImageWrapper>
          </Row>
          <Row>
            <ImageWrapper>
              <StaticImage
                alt=""
                src="../images/cat.png"
                transformOptions={{
                  grayscale: true,
                }}
              />
            </ImageWrapper>
            <ImageWrapper>
              <StaticImage
                alt=""
                src="../images/pilates.png"
                transformOptions={{
                  grayscale: true,
                }}
              />
            </ImageWrapper>
            <ImageWrapper>
              <StaticImage
                alt=""
                src="../images/bake.png"
                transformOptions={{
                  grayscale: true,
                }}
              />
            </ImageWrapper>
          </Row>
        </RightSide>
      </Container>
    </Section>
  )
}

export default Hobbies
