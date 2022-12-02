import * as React from "react"
import styled from "styled-components"

const Container = styled.section`
  display: block;
  width: 100%;
  height: 100%;
  padding: 60px 140px;
  box-sizing: border-box;
  background-color: ${props => props.theme.accentColor};
`

const Title = styled.h2`
  text-align: center;
`

const Card = styled.div`
  width: calc(100% / 4 - 52px);
  border: 1px solid ${props => props.theme.primaryColor};
  display: inline-block;
  vertical-align: middle;
  margin: 25px;
`

const ColumnTitle = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  margin: 20px;
`

const Row = styled.div`
  margin: 0 auto;
  width: 100%;
`

const Values = () => (
  <Container id="values">
    <Title>Things I value</Title>
    <Row>
      <Card>
        <ColumnTitle>Be bold</ColumnTitle>
      </Card>
      <Card>
        <ColumnTitle>Default to action</ColumnTitle>
      </Card>
      <Card>
        <ColumnTitle>Pursue the truth</ColumnTitle>
      </Card>
      <Card>
        <ColumnTitle>Keep improving</ColumnTitle>
      </Card>
    </Row>
    <Row>
      <Card>
        <ColumnTitle>Be transparent</ColumnTitle>
      </Card>
      <Card>
        <ColumnTitle>Empathise with users</ColumnTitle>
      </Card>
      <Card>
        <ColumnTitle>Empower others</ColumnTitle>
      </Card>
      <Card>
        <ColumnTitle>Be kind & humble</ColumnTitle>
      </Card>
    </Row>
  </Container>
)

export default Values
