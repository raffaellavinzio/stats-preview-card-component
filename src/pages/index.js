import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import styled from "styled-components"

import App from "../components/App"
import GlobalStyles from "../components/GlobalStyles"

const IndexPage = ({ data }) => (
  <>
    <GlobalStyles />
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8"/>
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
    <App />
    <Attribution>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by Raffaella using Gatsby and Styled Components.
    </Attribution>
  </>
)

const Attribution = styled.p`
  text-align: center;
  padding: 1rem;
  width: 100%;
`

export default IndexPage

export const query = graphql`
  query AppQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
