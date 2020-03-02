import React from "react"
import BackgroundImage from "gatsby-background-image"
// import styled from "styled-components"

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      {/* <h1>{title}</h1> */}
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

// const BackgroundWrapper = styled.div`
//   height: 100vh;
// `
