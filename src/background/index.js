// @flow
import { compose, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { MainStore } from 'redux-ext';

import reducer from './reducers';
import { STORE_NAME, CACHE_NAME } from '../constants';

const persistConfig = {
  key: CACHE_NAME,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const loggerMiddleware = createLogger();

let store;

if (process.env.ENV !== 'production') {
  store = createStore(persistedReducer, compose(applyMiddleware(loggerMiddleware)));
} else {
  store = createStore(persistedReducer);
}

store = new MainStore(store, STORE_NAME);
persistStore(store);

if (process.env.ENV !== 'production') {
  window.store = store;
}
