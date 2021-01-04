import React from "react"

const Title = ({ title }) => {
  return (
    <div>
      <h1 className="text-capitalize display-4 font-weight-bold text-center">
        {title}
      </h1>
    </div>
  )
}

export default Title
