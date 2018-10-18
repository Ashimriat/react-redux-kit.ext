// @flow
import merge from 'lodash/merge';
import { createReducer, createAction } from 'redux-act';
import { STORE_NAME } from '../../constants';

import type { MerchantType, CacheActivationType } from '../../types';

export const save = createAction('save merchants');
export const clear = createAction('remove merchants');

export const defaultState = [];

export default createReducer({
  [save]: (state: Array<MerchantType>, payload: Array): Array<MerchantType> => {
    const status: CacheActivationType = localStorage.getItem(`${STORE_NAME}-ACTIVATED-CACHE`) || {};
    let preparedMerchants = [...payload];

    if (status.id) {
      preparedMerchants = payload.map((merchant: MerchantType): MerchantType => {
        if (merchant.id === status.id) {
          return merge({}, merchant, { activated: true });
        }
        return merchant;
      });
    }

    return [...state, ...preparedMerchants];
  },
  [clear]: (): Array<MerchantType> => merge({}, defaultState),
}, defaultState);
