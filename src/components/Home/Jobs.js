import { graphql, useStaticQuery } from "gatsby"
import React from "react"
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

  console.log(company, position, date, desc)

  return (
    <div className="py-5">
      <Title title="Jobs" />
      <div className="btn btn-group">Work in Progress</div>
    </div>
  )
}

export default Jobs
