import React from "react"
import logo from "../../images/your-logo-here-9.png"
import { Link } from "gatsby"

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="company name" />
      </Link>
    </div>
  )
}
