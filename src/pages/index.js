import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
// import FeaturedDiscoveries from "../components/Home/FeaturedDiscoveries"
import SEO from "../components/SEO"
import StyledBackgroundSection from "../components/globals/Background2Section"
// import MapIndexPage from "../components/MapIndexPage"

export default ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      description="Check out this ultra cool Banks Rum Sidecar Motorcycle found in Downtown Coral Gables!"
    />
    <StyledBackgroundSection></StyledBackgroundSection>
    {/* <StyledHero home="true" img={data.brickellBayHero.childImageSharp.fluid}>
      <Banner
        title="discover miami"
        info="See Miami through a pedestrian's point of view"
      >
        <Link fade to="/home" className="btn-white">
          explore more
        </Link>
      </Banner>
    </StyledHero> */}
    {/* <FeaturedDiscoveries />
    <MapIndexPage /> */}
  </Layout>
)

export const query = graphql`
  query {
    brickellBayHero: file(relativePath: { eq: "homeBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// Previous Index Page

// import React from "react"
// import { Link, graphql } from "gatsby"
// // import img from "../images/homeBcg.jpg"
// import Layout from "../components/layout"
// // import Image from "../components/image"
// import SEO from "../components/seo"
// import BackgroundSection from "../components/globals/BackgroundSection"
// import NavbarHeader from "../components/globals/navbar/NavbarHeader"
// // import Gallery from "../components/home/Gallery"
// import GalleryArtDirection from "../components/home/GalleryArtDirection"

// const IndexPage = ({ data }) => (
//   <Layout>
//     <SEO title="Home" />

//     <BackgroundSection
//       img={data.img1.childImageSharp.fluid}
//       title="Acme Co."
//       styleClass="testimonial-background"
//     ></BackgroundSection>

//     <GalleryArtDirection />

//     <BackgroundSection
//       img={data.img1.childImageSharp.fluid}
//       title="Acme Co."
//       styleClass="testimonial-background"
//     >
//       <NavbarHeader />
//     </BackgroundSection>

//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

// export default IndexPage

// export const query = graphql`
//   {
//     img1: file(relativePath: { eq: "homeBcg.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1280) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
