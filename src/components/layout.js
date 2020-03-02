import React from "react"
import PropTypes from "prop-types"
// import "./bootstrap.min.css"
import "./layout.css"
// import Navbar from "../components/globals/navbar"
// import Footer from "../components/globals/Footer"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
