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
  padding: 1.5rem 0rem 0rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
