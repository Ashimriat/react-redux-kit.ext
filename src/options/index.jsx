// @flow
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ProxyStore } from 'redux-ext';

import { MuiThemeProvider } from '@material-ui/core/styles';

import { STORE_NAME } from '../constants';
import theme from '../theme';

const store = new ProxyStore(STORE_NAME);

store.ready()
  .then(
    function init() {
      const container = document.querySelector('.container');
      if (!container) {
        setTimeout(init, 100);
      } else if (container) {
        //
        render((
          <Provider store={store}>
            <MuiThemeProvider theme={theme}>
              <span>
                {'Hello Options'}
              </span>
            </MuiThemeProvider>
          </Provider>
        ), container);
      }
    },
  );
