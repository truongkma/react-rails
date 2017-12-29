import React from 'react';
import PropTypes from 'prop-types';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Route, Router} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
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
    const history = syncHistoryWithStore(createBrowserHistory(), store);
    UserAction.setCurrentUser(store, this.props.current_user)
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={App} />
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  current_user: PropTypes.object
}

export default Root
