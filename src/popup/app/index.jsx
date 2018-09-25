// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import { example1, example2 } from '../../background/actions';

type PropsType = {
  classes: Object,
  example: number,
  dispatchExample1: Function,
  dispatchExample2: Function
};

function Popup(props: PropsType): React.ComponentType {
  if (process.env.ENV !== 'production') {
    window.app = this;
  }

  const { classes, example, dispatchExample1, dispatchExample2 } = props;

  return (
    <div className={classes.root}>
      <Typography
        variant="caption"
        className={classes.inline}
      >
        {`Example value: ${example}`}
      </Typography>
      <Button
        onClick={() => {
          dispatchExample1(1);
        }}
        className={classes.inline}
      >
        {'+'}
      </Button>
      <Button
        onClick={dispatchExample2}
        className={classes.inline}
      >
        {'reset'}
      </Button>
    </div>
  );
}

function mapStateToProps(state: Object): Object {
  return {
    example: state.example || 0,
  };
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
    dispatchExample1: (n: number) => {
      dispatch(example1(n));
    },
    dispatchExample2: () => {
      dispatch(example2());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  withStyles(styles, { withTheme: true })(Popup),
);
