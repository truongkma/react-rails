import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
class Navigation extends React.Component {
  render () {
    return (
      <nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav metismenu" id="side-menu">
            <li className="nav-header">
              <Link to="/">Home</Link>
            </li>
            <li><Link to="/products">List Products</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation
