import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../../images/your-logo-here-9.png"

import styled from "styled-components"

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="company name" />
        </Link>
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: #3a5249;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
