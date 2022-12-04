import * as React from "react"
import styled from "styled-components"
import { device } from "../styles/device"

const Container = styled.section`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 80px 0;
  box-sizing: border-box;
`

const Title = styled.h2`
  text-align: center;
`

const Column = styled.div`
  width: calc(100% / 3 - 52px);
  border: 1px solid ${props => props.theme.primaryColor};
  display: inline-block;
  margin: 25px;
  box-sizing: border-box;
  @media ${device.extraSmall} {
    width: calc(100% - 50px);
  }
`

const ColumnTitle = styled.h4`
  text-align: center;
`

const ColumnContent = styled.p`
  text-align: center;
  padding: 0 2rem;
  line-height: 2.5rem;
  margin-bottom: 2.5rem;
`

const Story = () => (
  <Container id="story">
    <Title>My quick story</Title>
    <Column>
      <ColumnTitle>How it all started</ColumnTitle>
      <ColumnContent>
        With the question to my parents when I was 4. They panicked.
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
        Content, PR, Product, Engineering, Management.
      </ColumnContent>
    </Column>
  </Container>
)

export default Story
