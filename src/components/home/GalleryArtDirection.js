import React from "react"
import svg1 from "../../images/Vector.svg"
import svg2 from "../../images/Snooty-Sales-Co..svg"
import svg3 from "../../images/Guayaba-Bros..svg"
import svg4 from "../../images/yuca-films.svg"
import svg5 from "../../images/que-toston-engineering.svg"
import styled from "styled-components"

export default function GalleryArtDirection() {
  return (
    <ServicesWrapper>
      <section className="services">
        <h4>Example "Trusted by" Section</h4>
        {/* <Title title="services" /> */}
        <div className="services-center">
          <div>
            <img src={svg1} alt="backgrouds logo" />
          </div>
          <div>
            <img src={svg5} alt="backgrouds logo" />
          </div>
          <div>
            <img src={svg3} alt="backgrouds logo" />
          </div>
        </div>
        <div className="services-center-2">
          <div>
            <img src={svg4} alt="backgrouds logo" />
          </div>
          <div>
            <img src={svg2} alt="backgrouds logo" />
          </div>
        </div>
      </section>
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.div`
  .services {
    background: white;
    color: #3a5249;
    /* font-weight: 900; */
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 2.5rem;
  }
  .services-center {
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 50px;
  }
  .services-center-2 {
    width: 90vw;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 50px;
  }
  .service span {
    background: #3a5249;
    color: white;
    width: 150px;
    padding: 1.5rem 1.85rem;
    height: 130px;
    border-radius: 70%;
    text-align: center;
    line-height: 100px;
    vertical-align: middle;
    font-size: 1.9rem;
  }

  .title-css {
    font-size: 1.5rem;
    padding: 1rem 0rem;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: bold;
    color: #3a5249;
  }

  h4 {
    margin: 0rem 0rem 4rem 0rem;
    color: #484848;
    font-size: 1.35rem;
  }
`
