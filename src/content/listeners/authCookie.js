// @flow
import { readCookie } from '../../utils';
import { HOME_DOMAIN } from '../../constants';

import { login, logout } from '../../store/reducers/user';
import store from '../../store';

export default () => {
  if (window.location.host.indexOf(HOME_DOMAIN) !== -1) {
    const uid = readCookie('uid');

    if (uid && uid !== '0') {
      const name = readCookie('user');
      const MTcookie = readCookie('mt') ? decodeURIComponent(readCookie('mt')) : '0|0|1|0';
      const mt = Math.round(parseFloat(MTcookie.split('|')[0].replace(',', '.')) * 100) / 100;
      const at = Math.round(parseFloat(MTcookie.split('|')[3].replace(',', '.')) * 100) / 100;
      const level = MTcookie.split('|')[2];


      store.dispatch(login({
        uid: parseInt(uid, 10),
        name,
        mt,
        at,
        level: parseInt(level, 10),
      }));
    } else {
      store.dispatch(logout());
    }
  }
};
