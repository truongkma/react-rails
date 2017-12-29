import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {CurrentUserReducer} from './current_user_reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  currentUser: CurrentUserReducer.currentUser
});

export default rootReducer;
