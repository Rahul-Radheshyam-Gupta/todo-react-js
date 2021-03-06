import React from 'react'
import PropTypes from 'prop-types'
import "./header.css"

import { Link } from "react-router-dom";
let headerStyle = {
  width: "100%"
}
function Header(props) {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light .headerStyle" style={headerStyle}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">{ props.title}</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/" >Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                </ul>
                { props.searchBar 
                            ?
                              <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                              </form> 
                            :
                              ""
                }

              </div>
            </div>
          </nav>
        </div>
    )
}

// we can also defined default value of props if not passed from parents
Header.defaultProps = {
  title:'RAHUL',
  searchBar:true
}

// Here we can defined prop types like their data type
// like title should be string else it will give error in console
// Failed prop type: Invalid prop `title` of type `number` supplied to `Header`, expected `string`
// this will help in debugging and error handling
Header.propTypes = {
  title: PropTypes.string,
  searchBar : PropTypes.bool.isRequired
}

export default Header

