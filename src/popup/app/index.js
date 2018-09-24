// @flow
import * as React from 'react';
import { connect } from 'react-redux'
import merge from 'lodash/merge';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SwipeableViews from 'react-swipeable-views';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import Search from '@material-ui/icons/Search';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Photo from '@material-ui/icons/Photo';

import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles.js';

function Transition(props: Object) {
    return <Slide direction='up' {...props} />;
}

type Props = {
    theme: Object,
    classes: Object,
    lastAction: Object,
}

type State = {}

class MainApp extends React.PureComponent<Props, State> {
    constructor(props: Object) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        if (process.env.ENV !== 'production') {
            window.app = this;
        }
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>

            </div>
        );
    }
}

function mapStateToProps(state: Object) {
    return {
        lastAction: state.lastAction,
    };
}

function mapDispatchToProps(dispatch: Function) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(MainApp));