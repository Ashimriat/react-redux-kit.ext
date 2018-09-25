// @flow
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ProxyStore } from 'redux-ext';
import ShadowDOM from 'react-shadow';

import { MuiThemeProvider } from '@material-ui/core/styles';

import { STORE_NAME } from '../constants';
import Slider from './slider';
import theme from '../theme';

if (window.top === window) {
  const store = new ProxyStore(STORE_NAME);
  if (process.env.ENV !== 'production') {
    window.store = store;
  }

  window.store.ready()
    .then(function init() {
      const body = document.getElementsByTagName('body');
      if (body.length < 1) {
        setTimeout(init, 100);
      } else {
        const root = document.createElement('div');
        body[0].appendChild(root);

        render(
          <Provider store={store}>
            <ShadowDOM>
              <div
                style={{
                  zIndex: 25600,
                  position: 'fixed',
                  top: 0,
                  left: 0,
                }}
              >
                <MuiThemeProvider theme={theme}>
                  <Slider
                    store={store}
                  />
                </MuiThemeProvider>
              </div>
            </ShadowDOM>
          </Provider>, root,
        );
      }
    });
}
