'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Topnavbar extends Component {
  render() {
    return (
      <div className='row border-bottom'>
        <nav className='navbar navbar-static-top' role='navigation' style={{marginBottom: 0}}>
          <div className="navbar-header">
            <a className="navbar-minimalize minimalize-styl-2 btn btn-primary" href="#">
              <i className='fa fa-bars'></i>
            </a>
          </div>
          <ul className="nav navbar-top-links navbar-righ">
            <li>

            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
