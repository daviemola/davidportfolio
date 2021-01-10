import React, { Component } from "react"
import { Link } from "gatsby"

export default class Header extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      // {
      //   id: 1,
      //   path: "/",
      //   text: "home",
      // },
      // {
      //   id: 2,
      //   path: "/aboutme",
      //   text: "about me",
      // },
      // {
      //   id: 3,
      //   path: "/projects",
      //   text: "projects",
      // },
      //   {
      //     id: 3,
      //     path: "/contacts",
      //     text: "contact",
      //   },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.navbarHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={this.state.css}>
            <ul className="navbar-nav m-auto">
              {this.state.links.map(link => {
                return (
                  <li key={link.id}>
                    <strong>
                      <Link to={link.path} className="nav-link text-capitalize">
                        {link.text}
                      </Link>
                    </strong>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
