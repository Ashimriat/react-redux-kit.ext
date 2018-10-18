// @flow
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';

import authListener from './listeners/authCookie';
import store from '../store';
import { ENV } from '../constants';
import Slider from './slider';
import theme from '../theme';

function init() {
  const body = document.getElementsByTagName('body');
  if (body.length < 1) {
    setTimeout(init, 100);
  } else {
    const root = document.createElement('div');
    body[0].appendChild(root);

    authListener(store);

    render(
      <Provider store={store}>
        <div
          style={{
            zIndex: 25600,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            margin: 0,
            padding: 0,
            opacity: '1',
          }}
        >
          <MuiThemeProvider theme={theme}>
            <Slider/>
          </MuiThemeProvider>
        </div>
      </Provider>, root,
    );
  }
}

if (window.top === window) {
  if (ENV !== 'production') {
    window.store = store;
  }

  init();
}
