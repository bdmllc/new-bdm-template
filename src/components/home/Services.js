import React, { Component } from "react"
import styled from "styled-components"
import { FaUserTie, FaSign, FaMicrophoneAlt } from "react-icons/fa"
import { Link } from "gatsby"

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaUserTie />,
        title: "Who We Are",
        info: "Choose the colors that best reflect your business",
        path: "/about",
      },
      {
        icon: <FaSign />,
        title: "What We Do",
        info: "Select the icons that relate to your field",
        path: "/about",
      },
      {
        icon: <FaMicrophoneAlt />,
        title: "Tune In",
        info: "In your words, tell the world about your brand",
        path: "/about",
      },
    ],
  }
  render() {
    return (
      <ServicesWrapper>
        <section className="services">
          {/* <Title title="services" /> */}
          <div className="services-center">
            {this.state.services.map((item, index) => {
              return (
                <article key={index} className="service">
                  <Link to={item.path}>
                    {/* <Link to="/drinks/"> */}
                    <span>{item.icon}</span>
                  </Link>
                  <h5 className="title-css">{item.title}</h5>
                  <p>{item.info}</p>
                </article>
              )
            })}
          </div>
        </section>
      </ServicesWrapper>
    )
  }
}

const ServicesWrapper = styled.div`
  .services {
    background: white;
    color: #3a5249;
    /* font-weight: 900; */
    text-align: center;
    padding-top: 5rem;
    padding-bottom: 6rem;
  }
  .services-center {
    width: 90vw;
    margin: 0 auto;
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
`
