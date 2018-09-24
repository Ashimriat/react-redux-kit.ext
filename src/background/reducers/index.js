// @flow
import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';

import { example1, example2 } from '../actions';


const example = createReducer({
    [example1]: (state: number, payload: number): number => payload + state,
    [example2]: (): number => 0,
}, 0);

export default combineReducers({
    example,
});
