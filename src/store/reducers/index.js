// @flow
import { combineReducers } from 'redux';

import merchants from './merchants';
import user from './user';

export default combineReducers({
  merchants,
  user,
});
