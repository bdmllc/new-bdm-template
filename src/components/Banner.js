import React from "react"
// import styles from "../css/banner.module.css"
import styled from "styled-components"

const Banner = ({ title, info, children }) => {
  return (
    <BannerWrapper>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  text-align: center;
  letter-spacing: var(--mainSpacing);
  color: white;

  h1 {
    font-size: 3.3rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding: 0 1rem;
    letter-spacing: 6px;
    color: white;
  }
  p {
    width: 85%;
    margin: 0 auto;
    margin-bottom: 2rem;
    color: white;
  }
  @media screen and (min-width: 768px) {
    .banner h1 {
      font-size: 4.5rem;
    }
    .banner p {
      width: 70%;
    }
  }
`

export default Banner
