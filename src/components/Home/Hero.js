import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Image from "gatsby-image"
import socialLinks from "../Constants/socialLinks"

const query = graphql`
  {
    img: file(relativePath: { eq: "hero_photo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    img: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  console.log(fluid)

  return (
    <div className="hero-section mb-5">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 pt-5 pt-lg-0 d-flex flex-column justify-content-center"
            data-aos="fade-up"
          >
            <div>
              <h1 className="font-weight-bold">This is David Mola</h1>
              <h5>A freelance web developer</h5>
              <button className="btn btn-blue text-white">contact me</button>
              <socialLinks />
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img mb-5">
            <Image fluid={fluid} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
