import * as React from "react"
import styled from "styled-components"

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

const Card = styled.div`
  border: 1px solid ${props => props.theme.primaryColor};
  margin: 25px;
  padding: 20px;
`

const LeftSide = styled.div`
  width: 40%;
  display: inline-block;
  vertical-align: middle;
`

const RightSide = styled.div`
  width: 60%;
  display: inline-block;
`

const DateLabel = styled.p`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
`

const CompanyLabel = styled.p`
  text-transform: uppercase;
  margin: 20px 0;
`

const RoleLabel = styled.p`
  text-transform: uppercase;
  font-size: 1.375rem;
  color: ${props => props.theme.accentColor};
  font-weight: 600;
  margin: 0;
`

const Work = () => (
  <Container id="work">
    <Title>My last jobs</Title>
    <Card>
      <LeftSide>
        <DateLabel>Current</DateLabel>
        <CompanyLabel>Ambassador Labs</CompanyLabel>
        <RoleLabel>Senior Engineering Manager</RoleLabel>
      </LeftSide>
      <RightSide>
        <p>
          Managing the two teams responsible for the Telepresence and Ambassador
          Cloud products.
        </p>
      </RightSide>
    </Card>
    <Card>
      <LeftSide>
        <DateLabel>2021</DateLabel>
        <CompanyLabel>Buffer</CompanyLabel>
        <RoleLabel>Engineering Manager</RoleLabel>
      </LeftSide>
      <RightSide>
        <p>
          Managing the Webapp team, responsible for the tools that generate most
          of the $20M revenue.
        </p>
      </RightSide>
    </Card>
    <Card>
      <LeftSide>
        <DateLabel>2018-2021</DateLabel>
        <CompanyLabel>Buffer</CompanyLabel>
        <RoleLabel>Senior Front-End Engineer</RoleLabel>
      </LeftSide>
      <RightSide>
        <p>
          Leading the FE tech discussions and ship great features in the
          Publishing product.
        </p>
      </RightSide>
    </Card>
  </Container>
)

export default Work
