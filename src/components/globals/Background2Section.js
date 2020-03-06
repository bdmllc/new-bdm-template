import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import logo from "../../images/your-logo-here-9.png"

const Background2Section = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "homeBcg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <img src={logo} alt="company name" />
          <div className="parent-div">
            <h1 className="h-1">Simple & Affordable</h1>
            <h1 className="h-2"> One Page Websites</h1>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(Background2Section)`
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .parent-div {
    margin: auto;
    width: 70%;
    height: 70%;
    /* padding: 10px; */
    text-align: center;
    margin-top: 8rem;
    color: white;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

    /* padding: 0rem 5rem 0rem 0rem; */
    word-wrap: break-word;
  }

  .h-1 {
    font-size: 3rem;
  }
  .h-2 {
    font-size: 2.65rem;
  }

  img {
    padding: 2rem 0rem 0rem 0.75rem;
  }
`

export default StyledBackgroundSection
