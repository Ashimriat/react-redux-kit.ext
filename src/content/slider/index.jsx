// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


type PropsType = {
  example: number
};

function Slider(props: PropsType): React.ComponentType {
  const { example } = props;

  return (
    <Paper>
      <Typography variant="caption">
        {`Example value: ${example}`}
      </Typography>
    </Paper>
  );
}

function mapStateToProps(state: Object): Object {
  return {
    example: state.example,
  };
}

export default connect(mapStateToProps)(Slider);
