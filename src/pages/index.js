import * as React from "react"
import { Link } from "gatsby"
import { device } from "../styles/device"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Quote from "../components/Quote"
import Story from "../components/Story"
import Statement from "../components/Statement"

const LayoutWrapper = styled.div`
  margin-top: 67vh;
  position: relative;

  @media ${device.small} {
    margin-left: 45vw;
    margin-top: 0;
  }

  @media ${device.medium} {
    margin-left: 45rem;
    margin-top: 0;
  }
`

const Divider = styled.div`
  width: 80px;
  height: 4px;
  background: ${props => props.theme.accentColor};
  margin: 0 auto;
  border-radius: 6px;
`

const IndexPage = () => (
  <Layout>
    <LayoutWrapper alignItems="center">
      <Hero title="Hero" />
      <Divider />
      <Quote title="Quote" />
      <Divider />
      <Story title="Story" />
      <Statement />
    </LayoutWrapper>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
