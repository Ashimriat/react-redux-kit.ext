// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ProxyStore } from 'redux-ext';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Popup from './app';
import { STORE_NAME } from '../constants';
import theme from '../theme';

const store = new ProxyStore(STORE_NAME);

if (process.env.ENV !== 'production') {
  window.store = store;
}

store.ready()
  .then(
    function init() {
      const container = document.getElementById('root');
      if (!container) {
        setTimeout(init, 100);
      } else if (container) {
        render((
          <Provider store={store}>
            <MuiThemeProvider theme={theme}>
              <Popup/>
            </MuiThemeProvider>
          </Provider>
        ), container);
      }
    },
  );
