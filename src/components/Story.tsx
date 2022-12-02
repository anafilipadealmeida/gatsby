import * as React from "react"
import { device } from "../styles/device"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.section`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 60px 0;
  box-sizing: border-box;
`

const Title = styled.h2`
  text-align: center;
`

const Column = styled.div`
  width: calc(100% / 3 - 52px);
  border: 1px solid ${props => props.theme.accentColor};
  display: inline-block;
  margin: 25px;
`

const ColumnTitle = styled.h4`
  text-align: center;
`

const ColumnContent = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  padding: 0 2rem;
  line-height: 2.5rem;
`

const Story = () => (
  <Container id="story">
    <Title>My quick story</Title>
    <Column>
      <ColumnTitle>How it all started</ColumnTitle>
      <ColumnContent>
        With the question to my parents when I was 4. <br />
        They panicked.
      </ColumnContent>
    </Column>
    <Column>
      <ColumnTitle>What it triggered</ColumnTitle>
      <ColumnContent>
        Trial and error journey to discover what I wanted to do.
      </ColumnContent>
    </Column>
    <Column>
      <ColumnTitle>What I did</ColumnTitle>
      <ColumnContent>
        Content, <br />
        Product, <br />
        Engineering, <br />
        Management.
      </ColumnContent>
    </Column>
  </Container>
)

export default Story
