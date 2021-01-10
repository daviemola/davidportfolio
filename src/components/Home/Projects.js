import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Title from "../Global/Title"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareAltSquare } from "react-icons/fa"

const Projects = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiProjects: { nodes: project },
  } = data

  return (
    <div className="services-section">
      <div className="py-5 container">
        <Title title="Featured Projects" />
        {project.map((item, index) => (
          <article key={index} className="projects">
            <Image
              fluid={item.image.childImageSharp.fluid}
              className="project-image "
            />
            <div className="project-inform">
              <span className="projects-number">0{index + 1}</span>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              {item.stack.map((item, index) => (
                <div key={index} className="badge badge-secondary mr-2">
                  {item.stack}
                </div>
              ))}
              <div className="mt-2">
                <a href={item.github} className="project-link">
                  <FaGithubSquare className="projects-icon" />
                </a>
                <a href={item.url} className="project-link">
                  <FaShareAltSquare className="projects-icon" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        description
        featured
        github
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        stack {
          id
          stack
        }
      }
    }
  }
`

export default Projects
