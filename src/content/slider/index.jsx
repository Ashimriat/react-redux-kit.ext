// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import type { MerchantType } from '../../types';

type PropsType = {
  merchant: MerchantType
};

function Slider(props: PropsType): React.ComponentType {
  const { merchant, user } = props;

  return (
    <Paper>
      {JSON.stringify(user)}
    </Paper>
  );
}

function mapStateToProps(state: Object): Object {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(Slider);
