import React from "react"
import Title from "../Global/Title"

const Contacts = () => {
  return (
    <section className="contact py-5">
      <Title title="Contact Me" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/f/mleooker" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="john@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-blue text-white btn-block text-capitalize mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts
