import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FaArrowRight } from "react-icons/fa"
import Title from "../Global/Title"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data

  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]

  return (
    <div className="py-5">
      <Title title="Jobs" />
      <div className="text-center">
        {jobs.map((item, index) => (
          <button
            className={`btn job-btn mr-3 ${index === value && `active-btn`}`}
            key={index}
            onClick={() => setValue(index)}
          >
            {item.company}
          </button>
        ))}
      </div>
      <div className="container py-4">
        <p>
          Company: <strong className="text-uppercase">{company}</strong>
          <br />
          Role: <strong>{position}</strong>
          {/* </p>
        <p> */}
        </p>
        <p className="text-muted">{date}</p>
        <div className="job-desc">
          {desc.map(item => (
            <div key={item.id}>
              <FaArrowRight className="job-icon"></FaArrowRight>{" "}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Jobs
