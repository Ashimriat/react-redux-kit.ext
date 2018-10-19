// @flow
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from '../../theme';
import Slider from '../slider';
import { TEST_MERCHANT } from '../../constants';

export default (store: Object) => {
  const root = document.createElement('div');
  document.body.appendChild(root);

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
          <Slider merchant={TEST_MERCHANT} />
        </MuiThemeProvider>
      </div>
    </Provider>, root,
  );
};
