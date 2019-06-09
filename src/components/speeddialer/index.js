import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { capitalize } from '@material-ui/core/utils';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
    root: {
        width: '100%',
    },
    controls: {
        margin: theme.spacing(3),
    },
    exampleWrapper: {
        position: 'relative',
    },
    radioGroup: {
        margin: theme.spacing(1, 0),
    },
    speedDial: {
        position: 'absolute',
        '&$directionUp, &$directionLeft': {
            bottom: theme.spacing(1),
            right: theme.spacing(0),
        },
        '&$directionDown, &$directionRight': {
            top: theme.spacing(2),
            left: theme.spacing(3),
        },
    },
    directionUp: {},
    directionRight: {},
    directionDown: {},
    directionLeft: {},
});

const actions = [
    { icon: <Icon className={"fa fa-github"} />, name: 'Github' },
    { icon: <Icon className={"fa fa-linkedin"} />, name: 'LinkedIn' },
    { icon: <Icon className={"fa fa-twitter"} />, name: 'Twitter' },
    { icon: <Icon className={"fa fa-instagram"} />, name: 'Instagram' },
];

class SpeedDials extends React.Component {
    state = {
        direction: 'up',
        open: false,
        hidden: false,
    };

    handleClick = () => {
        this.setState(state => ({
            open: !state.open,
        }));
    };

    handleDirectionChange = (event, value) => {
        this.setState({
            direction: value,
        });
    };

    handleHiddenChange = (event, hidden) => {
        this.setState(state => ({
            hidden,
            // hidden implies !open
            open: hidden ? false : state.open,
        }));
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    render() {
        const { classes } = this.props;
        const { direction, hidden, open } = this.state;

        const speedDialClassName = clsx(
            classes.speedDial,
            classes[`direction${capitalize(direction)}`],
        );

        return (
            <div className={classes.root}>
                <div className={classes.exampleWrapper}>
                    <SpeedDial
                        ariaLabel="SpeedDial example"
                        className={speedDialClassName}
                        hidden={hidden}
                        icon={<SpeedDialIcon icon={<Icon>share</Icon>}/>}
                        onBlur={this.handleClose}
                        onClick={this.handleClick}
                        onClose={this.handleClose}
                        onFocus={this.handleOpen}
                        onMouseEnter={this.handleOpen}
                        onMouseLeave={this.handleClose}
                        open={open}
                        direction={direction}
                    >
                        {actions.map(action => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={this.handleClick}
                            />
                        ))}
                    </SpeedDial>
                </div>
            </div>
        );
    }
}

SpeedDials.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpeedDials);