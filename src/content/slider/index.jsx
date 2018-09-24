// @flow
import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import ShadowDOM from 'react-shadow';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


type PropsType = {
  store: Redux.Store,
  example: number
};

type StateType = Object;


class Slider extends React.Component<PropsType, StateType> {
  constructor(props: Props) {
    super(props);

    this.store = props.store;
  }

  store: Redux.Store;


  render(): React.ComponentType {
    const { example } = this.props;

    return (
      <ShadowDOM>
        <div>
          <Paper>
            <Typography variant="caption">
              {`Example value: ${example}`}
            </Typography>
          </Paper>
        </div>
      </ShadowDOM>
    );
  }
}

function mapStateToProps(state: Object): Object {
  return {
    example: state.example,
  };
}

export default connect(mapStateToProps)(Slider);
