import React from "react"
import { Link } from "gatsby"
import img from "../images/homeBcg.jpg"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection"
import NavbarHeader from "../components/globals/navbar/NavbarHeader"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <BackgroundSection
      img={data.img1.childImageSharp.fluid}
      title="Acme Co."
      styleClass="testimonial-background"
    >
      <NavbarHeader />
    </BackgroundSection>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    img1: file(relativePath: { eq: "homeBcg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
