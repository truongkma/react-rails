'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Navigation, Topnavbar, Footer} from '../components/layouts';

export default class App extends Component {
  render() {
    return (
      <div id='wrapper'>
        <Navigation />
        <div id='page-wrapper' className='gray-bg'>
          <Topnavbar />
          <h3>Nguyen Dac Truong</h3>
          <Footer />
        </div>
      </div>
    );
  }
}
