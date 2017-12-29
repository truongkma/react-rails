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
          {console.log(this.props.children)}
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};
