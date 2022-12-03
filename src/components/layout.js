/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "@fontsource/antonio/variable.css"

import { GlobalStyle } from "../styles/theme"
import styled, { ThemeContext } from "styled-components"

import Footer from "./Footer"
import Header from "./Header"

const Wrapper = styled.span`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const theme = useContext(ThemeContext)

  return (
    <Wrapper>
      <GlobalStyle theme={theme} />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          flex: "1 0",
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </Wrapper>
  )
}

export default Layout
