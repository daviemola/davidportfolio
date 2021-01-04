import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"

export default class Header extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/aboutme",
        text: "about me",
      },
      {
        id: 3,
        path: "/projects",
        text: "projects",
      },
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
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" width="40" height="40" /> Portfolio
            {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys  */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.navbarHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={this.state.css}>
            <ul className="navbar-nav ml-auto">
              {this.state.links.map(link => {
                return (
                  <li key={link.id}>
                    <Link to={link.path} className="nav-link text-capitalize">
                      {link.text}
                    </Link>
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
