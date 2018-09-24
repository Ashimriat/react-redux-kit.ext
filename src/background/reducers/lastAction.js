// @flow
import merge from 'lodash/merge';

function lastAction(state: ?Object, action: Object): Object {
    return merge({}, action);
}

export default lastAction;
