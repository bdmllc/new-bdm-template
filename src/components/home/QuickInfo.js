import React, { Component } from "react"
// import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
// import { Link } from "gatsby"
// import { styles } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <QuickInfoWrapper>
        <h3>About Us</h3>
        {/* <Title message="About Us" title="Our Mission" /> */}
        <h1>Our Mission</h1>
        <div className="underline" />
        <p className="text">
          FYI: The following is Lorem Ipsum, Dummy Text in Latin used by
          publishers since the Middle Ages to visualize a text layout. Sed ut
          perspiciatis architecto beatae vitae dicta sunt explicabo. Nemo enim
          ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
          quia consequuntur magni dolores eos qui ratione voluptatem sequi
          nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur.
        </p>

        {/* <Link to="/about/" style={{ textDecoration: "none" }}>
          <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>
        </Link> */}
      </QuickInfoWrapper>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  text-align: center;
  h3 {
    font-size: 2rem;
    color: #5b8072;
  }
  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    color: #3a5249;
  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: #5b8072;
    margin: 0.5rem auto;
  }
  .text {
    text-align: left;
    margin: 2rem auto;
    padding: 0rem auto;
    line-height: 2rem;
    color: #3a5249;
    word-spacing: 0.2rem;
    @media (min-width: 768px) {
      width: 70%;
    }
    @media (min-width: 992px) {
      width: 60%;
    }
  }
`
