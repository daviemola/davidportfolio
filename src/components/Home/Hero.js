import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Image from "gatsby-image"
import SocialLinks from "../Constants/socialLinks"

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

  return (
    <div className="hero-section mb-5">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 pt-5 pt-lg-0 d-flex flex-column justify-content-center"
            data-aos="fade-up"
          >
            <div className="py-5">
              <h2 className="text-capitalize display-4 font-weight-bold">
                I'm David
              </h2>
              <p>A self-taught freelance web developer and designer.</p>
              <button className="btn btn-blue text-white">contact me</button>
              <SocialLinks />
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img mb-5 d-none d-sm-block d-sm-none d-md-block">
            <Image fluid={fluid} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
