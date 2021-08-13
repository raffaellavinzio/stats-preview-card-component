import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

import { QUERY } from "../../constants"

const HeaderImg = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "image-header-desktop.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }

      mobile: file(relativePath: { eq: "image-header-mobile.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const images = withArtDirection(getImage(data.desktop), [
    {
      image: getImage(data.mobile),
      media: `${QUERY}`,
    },
  ])

  return (
    <GatsbyImage
      alt=""
      image={images}
      imgStyle={{ width: "100%" }}
      style={{ mixBlendMode: "multiply" }}
    />
  )
}

export default HeaderImg
