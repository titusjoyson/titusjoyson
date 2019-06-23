import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

import './styles.css';


const useStyles = makeStyles({
    toolBar: {
        justifyContent: "space-between",
    },
    toolBarPad: {
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
    }
});

const menuItems = [
    { "text": 'Home', 'path': '/' },
    { "text": 'About', 'path': 'about' },
    // { "text": 'Projects' },
    // { "text": 'Blog' },
]


function SimpleAppBar({ props }) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {menuItems.map((item, index) => (
                    <Link to={item.path}>
                        <ListItem a key={item.text}>
                            <ListItemText primary={item.text} classes={{"primary":"main-text-color"}}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
        </div>
    );

    let toolBarStyle = [classes.toolBar]
    if (matches) toolBarStyle.push(classes.toolBarPad)
    return (
        <div className={classes.root}>
            <AppBar position="static" color="white">
                <Container maxWidth="lg" className={classes.navContainer}>
                    <Toolbar className={toolBarStyle}>
                        <Typography variant="h6" color="inherit" className={classes.title}>Titus Joyson</Typography>
                        <div>
                            <Hidden smDown>
                                {menuItems.map((item, index) => (
                                    <Link to={item.path}>
                                        <Button
                                            color="rgba(0, 0, 0, 0.87);"
                                            className={classes.button}
                                        >
                                            {item.text}
                                        </Button>
                                    </Link>
                                ))}
                            </Hidden>
                            <Hidden mdUp>
                                <IconButton color="inherit" className={classes.button}>
                                    <MenuIcon onClick={toggleDrawer('left', true)} />
                                </IconButton>
                            </Hidden>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer anchor="left" open={state.left} onClose={toggleDrawer('left', false)}>
                <Toolbar className={toolBarStyle}>
                    <Typography variant="h6" color="inherit">Titus Joyson</Typography>
                </Toolbar>
                <Divider />
                {sideList("left")}
            </Drawer>
        </div>
    );
}

export default SimpleAppBar;