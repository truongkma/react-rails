'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="pull-right">
          <p>Nguyen Dac Truong</p>
        </div>
        <strong>Copyright</strong> TruongKMA &copy; 2017-2018
      </div>
    );
  }
}
