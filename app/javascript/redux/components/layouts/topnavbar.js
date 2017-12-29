import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'

class Topnavbar extends React.Component {
  render () {
    return (
      <div className="row border-bottom">
        <nav className="navbar navbar-static-top" role="navigation" style={{marginBottom: 0}}>
          <div className="navbar-header">
            <a className="navbar-minimalize minimalize-styl-2 btn btn-primary" href="#">
              <i className="fa fa-bars"></i>
            </a>
          </div>
          <ul className="nav navbar-top-links navbar-right">
          </ul>
        </nav>
      </div>
    );
  }
}

export default Topnavbar
