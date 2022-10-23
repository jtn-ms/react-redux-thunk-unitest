/* eslint-disable import/no-anonymous-default-export */
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import appReducer from './app';

export default history => combineReducers({
  router: connectRouter(history),
  app: appReducer,
});
