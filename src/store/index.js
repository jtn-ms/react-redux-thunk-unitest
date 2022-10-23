/* eslint-disable import/no-anonymous-default-export */
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';

export const history = createBrowserHistory();

export default preloadedState => createStore(
  createRootReducer(history),
  preloadedState,
  composeWithDevTools(applyMiddleware(
    routerMiddleware(history),
    thunk,
  ))
);
