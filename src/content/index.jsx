// @flow
import authListener from './listeners/authCookie';
import fontsListener from './listeners/fontsInjection';
import sliderListener from './listeners/sliderInjection';
import store from '../store';
import { ENV } from '../constants';

function init() {
  const body = document.getElementsByTagName('body');
  if (body.length < 1) {
    setTimeout(init, 100);
  } else {
    fontsListener();
    authListener(store);
    sliderListener(store);
  }
}

if (window.top === window) {
  if (ENV !== 'production') {
    window.store = store;
  }

  init();
}
