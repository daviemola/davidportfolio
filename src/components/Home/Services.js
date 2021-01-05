import React from "react"
import Title from "../Global/Title"
import services from "../Constants/services"

const Services = () => {
  return (
    <div className="services-section py-5 my-3">
      <div className="container ">
        <Title title="My Services" />
        <div className="row">
          {services.map(service => (
            <div
              className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto py-5"
              key={service.id}
            >
              <div className="card pb-3" style={{ minHeight: "100%" }}>
                <h4 className="text-center pt-4 my-4">{service.icon}</h4>
                <h6 className="text-center font-weight-bold">
                  {service.title}
                </h6>
                <div className="service-underline"></div>
                <p className="text-center py-4 text-muted mx-3">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
