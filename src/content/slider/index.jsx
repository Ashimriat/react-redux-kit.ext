// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

import type { MerchantType, UserType } from '../../types';
import styles from './styles';
import { TEST_USER } from '../../constants';

type PropsType = {
  classes: Object,
  user: UserType,
  merchant: MerchantType
};

function Slider(props: PropsType): React.ComponentType {
  const { merchant, user, classes } = props;

  console.log(merchant, user);

  if (!merchant || user.uid === 'local') {
    return null;
  }

  return (
    <AppBar
      position="static"
      color="primary"
    >
      <Toolbar
        className={classes.root}
        variant="dense"
      >
        <Grid container>
          <Grid
            item
            className={classes.logo}
          />
          <Grid
            item
          >
            <Typography
              variant="h6"
              color="secondary"
              align="center"
            >
              {merchant.tld}
            </Typography>
            <Typography
              variant="h6"
              color="secondary"
              align="center"
            >
              {`puoi avere un rimborso del ${merchant.cashback}${merchant.label}`}
            </Typography>
          </Grid>
          <Grid
            item
            className={classes.cat}
          >
            <img
              src={`https://s3-images.bestshopping.com/ml/l/${user.level}.png`}
              alt="user"
            />
          </Grid>
        </Grid>
        <CloseIcon
          className={classes.close}
        />
      </Toolbar>
    </AppBar>
  );
}

function mapStateToProps(state: Object): Object {
  return {
    user: TEST_USER,
  };
}

export default connect(mapStateToProps)(
  withStyles(styles)(Slider),
);
