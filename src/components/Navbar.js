import React from 'react'
import PropTypes from 'prop-types'
import {
    // BrowserRouter,remove comment when you needed.
    // Route,remove comment when you needed.
    // Routes,remove comment when you needed.
  Link,
} from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
<nav className={`navbar navbar-expand-lg `}>
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/">
      Fusion Spa
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="btn btn-primary my-3 mx-3" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link  className="btn btn-primary my-3 mx-3" to="/About">
            About
          </Link>
        </li>


        <li className="nav-item">
          <Link  className="btn btn-primary my-3 mx-3" to="/Contact">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link  className="btn btn-primary my-3 mx-3" to="/Service">
            Our Services
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
Navbar.propTypes={
    title:PropTypes.string,
    
}
Navbar.defaultProps={
    title:"FusionSpa",
}