import React from 'react';
import PropTypes from 'prop-types';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import rootReducer from './reducers/root_reducer';
import {App, Products, About} from './containers'
import Utils from './lib/utils'
import {UserAction} from './actions';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const store = createStore(rootReducer);
    UserAction.setCurrentUser(store, this.props.current_user);
    return (
      <Provider store={store}>
        <Router>
          <App>
            <div>
              <Switch>
                <Route exact path='/products' component={Products} />
                <Route path='/products/about' component={About} />
              </Switch>
            </div>
          </App>
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  current_user: PropTypes.object
}

export default Root
