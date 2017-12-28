import React from 'react';
import PropTypes from 'prop-types';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import rootReducer from './reducers/root_reducer';
import {App} from './containers'
import Utils from './lib/utils'
import {UserAction} from './actions';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const store = createStore(rootReducer);
    UserAction.setCurrentUser(store, this.props.current_user)
    return (
      <div>
        <App />
        <h2>OK</h2>
      </div>
    );
  }
}

Root.propTypes = {
  current_user: PropTypes.object
}

export default Root
