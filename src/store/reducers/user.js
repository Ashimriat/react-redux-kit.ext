// @flow
import merge from 'lodash/merge';
import { createReducer, createAction } from 'redux-act';

import type { UserType } from '../../types';

export const defaultState = { uid: 'local' };
export const login = createAction('login');
export const logout = createAction('logout');

export default createReducer({
  [login]: (state: UserType, payload: Object): UserType => merge({}, state, payload),
  [logout]: (): UserType => merge({}, defaultState),
}, defaultState);
