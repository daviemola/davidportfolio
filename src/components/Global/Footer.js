import React from "react"

function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-1o mx-auto col-md-6 text-yellow text-center text-capitalize">
            <h6>
              All rights reserved &copy;{new Date().getFullYear().toString()}
            </h6>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
