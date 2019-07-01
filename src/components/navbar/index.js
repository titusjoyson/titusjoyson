import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import './styles.css';


const useStyles = makeStyles({
    appbar:{
        backgroundColor: "transparent"
    },
    toolBar: {
        justifyContent: "space-between",
    },
    toolBarPad: {
        justifyContent: "space-between",
        paddingRight: 0,
    },
    button: {
        maxHeight: 70,
        borderRadius: 0,
        padding: 20
    },
    list: {
        width: 250,
    },
    navContainer: {
        padding: 0
    },
    title:{
        color: "white"
    }
});


function SimpleAppBar({ props }) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


    let toolBarStyle = classes.toolBar
    if (matches) toolBarStyle = classes.toolBarPad
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Container maxWidth={false} className={classes.navContainer}>
                    <Toolbar className={toolBarStyle}>
                    <Link to="/">
                        <Typography variant="h6" color="inherit" className={classes.title}>Titus Joyson</Typography>
                    </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default SimpleAppBar;