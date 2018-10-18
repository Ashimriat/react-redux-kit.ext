// @flow
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import { ENV } from '../constants';
import rootReducer from './reducers';

let middleware;

if (ENV === 'development') {
  middleware = applyMiddleware(logger, thunkMiddleware);
} else {
  middleware = applyMiddleware(thunkMiddleware);
}

export default createStore(rootReducer, middleware);
